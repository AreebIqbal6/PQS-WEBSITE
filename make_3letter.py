from PIL import Image
import numpy as np

img = Image.open(r'C:\Users\Noman Traders\Desktop\PQS\pqs-website\public\logo.png').convert("RGBA")
data = np.array(img)

r = data[:, :, 0]
g = data[:, :, 1]
b = data[:, :, 2]
a = data[:, :, 3]

luminance = 0.299 * r + 0.587 * g + 0.114 * b

text_mask = luminance > 100

data[:, :, 3] = np.where(text_mask, a, 0)
data[:, :, 0] = np.where(text_mask, 255, r)
data[:, :, 1] = np.where(text_mask, 255, g)
data[:, :, 2] = np.where(text_mask, 255, b)

rows = np.any(text_mask, axis=1)
cols = np.any(text_mask, axis=0)
ymin, ymax = np.where(rows)[0][[0, -1]]
xmin, xmax = np.where(cols)[0][[0, -1]]

cropped = data[ymin:ymax+1, xmin:xmax+1]

img_out = Image.fromarray(cropped, "RGBA")
img_out.save(r'C:\Users\Noman Traders\Desktop\PQS\pqs-website\public\pqs_3letter_white.png')
print("Saved pqs_3letter_white.png! Size:", img_out.size)
