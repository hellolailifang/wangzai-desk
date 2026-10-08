#!/bin/bash
# 工作台部署：升 sw 缓存版本 → 同步 dist → SSH 推送 GitHub Pages
# 用法：bash xhs/deploy.sh "提交信息"
set -e
# 自动定位仓库根目录（无论从哪个目录调用此脚本，都切到 git 仓库根）
cd "$(git rev-parse --show-toplevel)"
MSG="${1:-更新工作台内容}"

PY=/Users/lailifang/.workbuddy/binaries/python/versions/3.13.12/bin/python3
SSH_CMD="ssh -i /Users/lailifang/WorkBuddy/2026-08-31-10-54-05/.ssh_deploy/id_ed25519 -o IdentitiesOnly=yes -o UserKnownHostsFile=/Users/lailifang/WorkBuddy/2026-08-31-10-54-05/.ssh_deploy/known_hosts"

# 1) sw.js 缓存版本 +1
$PY - <<'EOF'
import re, pathlib
p = pathlib.Path('sw.js'); s = p.read_text(encoding='utf-8')
m = re.search(r"const CACHE\s*=\s*'wz-desk-v(\d+)'", s)
old = int(m.group(1)); new = old + 1
p.write_text(s[:m.start(1)] + str(new) + s[m.end(1):], encoding='utf-8')
print(f'sw.js 缓存版本 v{old} -> v{new}')

# 同步 index.html 里的注册 URL（浏览器靠这个 query 识别 SW 脚本变了）
h = pathlib.Path('index.html'); t = h.read_text(encoding='utf-8')
t2, n = re.subn(r"(register\('sw\.js\?v=)\d+(')", lambda mm: mm.group(1) + str(new) + mm.group(2), t)
print(f'index.html 注册 URL 已同步为 sw.js?v={new}' if n else '!! 未在 index.html 找到 sw.js?v=N，请手动同步')

# 给 network-first 的内容文件加版本戳，破浏览器 HTTP 缓存（GitHub Pages 默认 max-age=600）
# 否则无版本号的 content.js / en_practice.js 会被缓存 10 分钟，用户刷新看不到新内容
for marker in ('content', 'en_practice'):
    t2, k = re.subn(
        rf"({marker}\.js)(?:\?v=\d+)?\\?\"",
        lambda mm: mm.group(1) + f"?v={new}" + '"',
        t2)
    print(f'index.html {marker}.js 引用已加版本戳 v{new}（{k} 处）')

h.write_text(t2, encoding='utf-8')
EOF

# 2) 同步 dist
for f in index.html content.js sw.js manifest.webmanifest; do cp "$f" "dist/$f"; done
echo "已同步 dist/"

# 3) 提交
git add -A
git commit -m "$MSG" || echo "无变更可提交"

# 4) rebase（远端常有 CloudStudio 等产生的提交）
export GIT_SSH_COMMAND="$SSH_CMD"
git fetch origin
git pull --rebase origin main || { echo "!! rebase 失败，请手动处理"; exit 1; }

# 5) rebase 可能重写 root 文件 → 再次同步 dist 后推送
for f in index.html content.js sw.js manifest.webmanifest; do cp "$f" "dist/$f"; done
git add -A
git commit -m "同步 dist" || true
git push origin main
echo "✅ 已推送 origin main"
