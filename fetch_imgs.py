#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""通用图片候选抓取：必应图片搜索 -> 下载候选 -> 过滤无效/过小 -> 生成 contact sheet 供人工挑选"""
import os, re, sys, json, html, urllib.parse, io
from concurrent.futures import ThreadPoolExecutor
import urllib.request
from PIL import Image

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
HDR = {"User-Agent": UA, "Accept": "image/avif,image/webp,image/*,*/*;q=0.8",
       "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"}


def bing_search(query, first=1):
    """返回必应图片搜索的原图 URL 列表"""
    q = urllib.parse.quote(query)
    url = f"https://cn.bing.com/images/search?q={q}&form=HDRSC2&first={first}"
    req = urllib.request.Request(url, headers={"User-Agent": UA,
                                               "Accept-Language": "zh-CN,zh;q=0.9"})
    try:
        with urllib.request.urlopen(req, timeout=25) as r:
            h = r.read().decode("utf-8", "ignore")
    except Exception as e:
        print(f"  [搜索失败] {query}: {e}")
        return []
    urls = []
    for m in re.finditer(r'murl&quot;:&quot;(.*?)&quot;', h):
        u = html.unescape(m.group(1))
        if u.startswith("http"):
            urls.append(u)
    # 去重保序
    seen, out = set(), []
    for u in urls:
        if u not in seen:
            seen.add(u)
            out.append(u)
    return out


def download(url, path, min_w=300, min_h=300):
    """下载并校验图片；成功返回 (w,h)，失败返回 None"""
    try:
        req = urllib.request.Request(url, headers=HDR)
        with urllib.request.urlopen(req, timeout=20) as r:
            data = r.read()
        if len(data) < 8000:
            return None
        im = Image.open(io.BytesIO(data))
        im.load()
        if im.width < min_w or im.height < min_h:
            return None
        im = im.convert("RGB")
        im.save(path, "JPEG", quality=92)
        return (im.width, im.height)
    except Exception:
        return None


def gather(query, outdir, prefix, want=6, min_w=300, min_h=300):
    """抓取 want 张候选图，返回已保存文件列表"""
    os.makedirs(outdir, exist_ok=True)
    urls = bing_search(query)
    saved = []
    idx = 0
    with ThreadPoolExecutor(max_workers=8) as ex:
        futs = {}
        for u in urls[:want * 3]:
            p = os.path.join(outdir, f"{prefix}_{idx}.jpg")
            futs[ex.submit(download, u, p, min_w, min_h)] = (p, u)
            idx += 1
        for f in futs:
            p, u = futs[f]
            try:
                sz = f.result()
            except Exception:
                sz = None
            if sz:
                saved.append((p, sz, u))
            elif os.path.exists(p):
                os.remove(p)
    saved.sort(key=lambda x: x[0])
    return saved[:want * 2]


def contact_sheet(files, out, cols=4, cell=260, labels=None):
    """把候选图拼成一张对比图，带序号"""
    from PIL import ImageDraw
    n = len(files)
    if n == 0:
        return None
    rows = (n + cols - 1) // cols
    sheet = Image.new("RGB", (cols * cell, rows * (cell + 22)), (245, 245, 245))
    d = ImageDraw.Draw(sheet)
    for i, f in enumerate(files):
        try:
            im = Image.open(f).convert("RGB")
        except Exception:
            continue
        im.thumbnail((cell - 8, cell - 8))
        x = (i % cols) * cell + (cell - im.width) // 2
        y = (i // cols) * (cell + 22) + 20
        sheet.paste(im, (x, y))
        lab = labels[i] if labels else os.path.basename(f)
        d.text(((i % cols) * cell + 6, (i // cols) * (cell + 22) + 4), lab, fill=(20, 20, 20))
    sheet.save(out, "JPEG", quality=88)
    return out


if __name__ == "__main__":
    cfg = json.load(open(sys.argv[1], encoding="utf-8"))
    outdir = sys.argv[2]
    want = int(sys.argv[3]) if len(sys.argv) > 3 else 6
    minw = int(sys.argv[4]) if len(sys.argv) > 4 else 300
    result = {}
    for key, query in cfg.items():
        print(f"抓取 {key} <- {query}")
        s = gather(query, outdir, key, want, minw, minw)
        result[key] = [{"file": p, "size": sz, "url": u} for p, sz, u in s]
        print(f"  得到 {len(s)} 张")
    json.dump(result, open(os.path.join(outdir, "_manifest.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    print("完成")
