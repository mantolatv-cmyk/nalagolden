import sys
from collections import deque
from PIL import Image

def remove_exterior_white(img_path, out_path, tolerance=30):
    img = Image.open(img_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size

    queue = deque()
    seen = set()
    
    # Add border pixels to queue
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
        seen.add((x, 0))
        seen.add((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))
        seen.add((0, y))
        seen.add((width - 1, y))
        
    def is_white(c):
        return c[0] >= 255 - tolerance and c[1] >= 255 - tolerance and c[2] >= 255 - tolerance

    transparent_pixels = []
    
    while queue:
        x, y = queue.popleft()
        px = pixels[x, y]
        
        # If it's transparent or whiteish
        if px[3] == 0 or is_white(px):
            transparent_pixels.append((x, y))
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in seen:
                        seen.add((nx, ny))
                        queue.append((nx, ny))
                        
    for x, y in transparent_pixels:
        pixels[x, y] = (255, 255, 255, 0)
        
    # Optional: smooth edges a bit
    # For now, just save
    img.save(out_path, "PNG")

if __name__ == '__main__':
    remove_exterior_white(sys.argv[1], sys.argv[2])
