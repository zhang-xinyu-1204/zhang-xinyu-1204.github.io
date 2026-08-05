from PIL import Image
import os

images_dir = 'images'
files = ['ZXY-1.jpg', 'ZXY-2.jpg', 'ZXY-3.jpg']
max_width = 800
quality = 85

def compress_image(filepath):
    original_size = os.path.getsize(filepath)
    with Image.open(filepath) as img:
        original_dims = img.size
        if img.size[0] > max_width:
            ratio = max_width / img.size[0]
            new_size = (max_width, int(img.size[1] * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)
        img.save(filepath, 'JPEG', quality=quality, optimize=True)
    new_size = os.path.getsize(filepath)
    return original_size, new_size, original_dims

if __name__ == '__main__':
    for f in files:
        filepath = os.path.join(images_dir, f)
        if not os.path.exists(filepath):
            print(f'文件不存在: {filepath}')
            continue
        orig, new, dims = compress_image(filepath)
        ratio = (1 - new / orig) * 100
        print(f'{f}: {dims[0]}x{dims[1]} | {orig/1024/1024:.1f}MB -> {new/1024/1024:.1f}MB (缩小 {ratio:.0f}%)')
    print('\n完成。如需重新生成 favicon，请运行: python generate_favicons.py')