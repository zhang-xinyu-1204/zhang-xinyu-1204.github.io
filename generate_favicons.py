from PIL import Image
import os

# --- 配置 ---
# 源图片路径
source_image_path = os.path.join('images', 'ZXY-1.jpg')

# 目标图标尺寸和文件名
output_specs = {
    'apple-touch-icon.png': (180, 180),
    'favicon-32x32.png': (32, 32),
    'favicon-16x16.png': (16, 16),
}

# 输出文件夹
output_dir = 'images'

# --- 脚本执行 ---
def generate_favicons():
    # 检查源文件是否存在
    if not os.path.exists(source_image_path):
        print(f"错误：源文件 '{source_image_path}' 不存在。")
        return

    # 确保输出目录存在
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    try:
        # 打开源图片
        with Image.open(source_image_path) as img:
            print(f"成功读取源文件: {source_image_path}")

            # 遍历所有需要生成的尺寸
            for filename, size in output_specs.items():
                # 调整图片尺寸
                resized_img = img.resize(size, Image.Resampling.LANCZOS)
                
                # 构建输出路径
                output_path = os.path.join(output_dir, filename)
                
                # 保存新生成的图标
                resized_img.save(output_path)
                print(f"成功生成: {output_path} (尺寸: {size[0]}x{size[1]})")
        
        print("\n所有 favicon 图标已成功生成！")

    except Exception as e:
        print(f"处理图片时发生错误: {e}")

if __name__ == "__main__":
    generate_favicons()