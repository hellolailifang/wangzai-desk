import zlib, struct, math

S = 1024
Rc = 230
cx = cy = S / 2
img = [[(0, 0, 0, 0)] * S for _ in range(S)]

for y in range(S):
    for x in range(S):
        inside = True
        if x < Rc and y < Rc:
            if (Rc - x) ** 2 + (Rc - y) ** 2 > Rc ** 2: inside = False
        elif x >= S - Rc and y < Rc:
            if (x - (S - Rc)) ** 2 + (Rc - y) ** 2 > Rc ** 2: inside = False
        elif x < Rc and y >= S - Rc:
            if (Rc - x) ** 2 + (y - (S - Rc)) ** 2 > Rc ** 2: inside = False
        elif x >= S - Rc and y >= S - Rc:
            if (x - (S - Rc)) ** 2 + (y - (S - Rc)) ** 2 > Rc ** 2: inside = False
        if not inside:
            continue
        t = y / (S - 1)
        r = int(10 + (27 - 10) * t)
        g = int(61 + (108 - 61) * t)
        b = int(98 + (168 - 98) * t)
        img[y][x] = (r, g, b, 255)

cR = 300
for y in range(S):
    for x in range(S):
        if math.hypot(x - cx, y - cy) <= cR:
            img[y][x] = (255, 255, 255, 255)

for y in range(S):
    for x in range(S):
        d = math.hypot(x - cx, y - cy)
        if abs(d - cR) <= 11:
            img[y][x] = (10, 61, 98, 255)

half = 15
for y in range(S):
    for x in range(S):
        d = math.hypot(x - cx, y - cy)
        if d > cR - 28:
            continue
        if abs(x - cx) <= half or abs(y - cy) <= half:
            img[y][x] = (10, 61, 98, 255)

for y in range(S):
    for x in range(S):
        d = math.hypot(x - cx, y - cy)
        if d > cR - 42:
            continue
        if abs(x - cx) + abs(y - cy) <= 68:
            img[y][x] = (255, 255, 255, 255)

raw = bytearray()
for y in range(S):
    raw.append(0)
    for x in range(S):
        r, g, b, a = img[y][x]
        raw += bytes((r, g, b, a))


def chunk(typ, data):
    return (struct.pack('>I', len(data)) + typ + data +
            struct.pack('>I', zlib.crc32(typ + data) & 0xffffffff))


png = b'\x89PNG\r\n\x1a\n'
png += chunk(b'IHDR', struct.pack('>IIBBBBB', S, S, 8, 6, 0, 0, 0))
png += chunk(b'IDAT', zlib.compress(bytes(raw), 9))
png += chunk(b'IEND', b'')
with open('icon.png', 'wb') as f:
    f.write(png)
print('icon.png written', len(png), 'bytes')
