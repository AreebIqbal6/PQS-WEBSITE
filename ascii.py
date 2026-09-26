from PIL import Image

def image_to_ascii(image_path, width=80):
    img = Image.open(image_path).convert('L')
    aspect_ratio = img.height / img.width
    new_height = int(aspect_ratio * width * 0.55)
    img = img.resize((width, new_height))
    pixels = img.getdata()
    chars = ["B","S","#","&","@","$","%","*","!",":","."]
    new_pixels = [chars[pixel//25] for pixel in pixels]
    new_pixels = ''.join(new_pixels)
    ascii_image = [new_pixels[index:index + width] for index in range(0, len(new_pixels), width)]
    return "\n".join(ascii_image)

print(image_to_ascii(r'C:\Users\Noman Traders\Desktop\PQS\pqs-website\public\stamp.png', 100))
print("\n\n")
print(image_to_ascii(r'C:\Users\Noman Traders\Desktop\PQS\pqs-website\public\logo.png', 100))
