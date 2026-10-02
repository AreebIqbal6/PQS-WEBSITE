import urllib.request
import re
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    'https://unsplash.com/photos/assorted-color-thread-lot-Nh6NsnqYVsI',
    'https://unsplash.com/photos/hands-holding-fluffy-white-cotton-bolls-64xejgIm15o',
    'https://unsplash.com/photos/intricate-gold-embroidery-with-waves-and-floral-motifs-lYa0atgEwsI',
    'https://unsplash.com/photos/a-person-in-a-lab-coat-9SCof6uWKcs',
    'https://unsplash.com/photos/a-row-of-machines-that-are-next-to-each-other-mBXQCNKbq7E'
]

os.makedirs('public/unsplash', exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for i, url in enumerate(urls):
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
        match = re.search(r'property="og:image"\s+content="([^"]+)"', html)
        if match:
            img_url = match.group(1).replace("&amp;", "&")
            print(f"Found: {img_url}")
            
            # Download the image
            img_req = urllib.request.Request(img_url, headers=headers)
            img_data = urllib.request.urlopen(img_req, context=ctx).read()
            filename = f"public/unsplash/img_{i}.jpg"
            with open(filename, 'wb') as f:
                f.write(img_data)
            print(f"Downloaded to {filename}")
        else:
            print(f"No image found for {url}")
    except Exception as e:
        print(f"Error on {url}: {e}")
