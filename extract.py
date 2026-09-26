import os, re
path = r'C:\Users\Noman Traders\Desktop\PQS\PQS_Company_Profile.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

pages = re.split(r'<div\s+class="page[^>]*">', html)
for i, p in enumerate(pages):
    if i == 4:
        print(f'--- PAGE {i} ---')
        clean_p = re.sub(r'data:image/[^;]+;base64,[^"]+', '...', p)
        # remove arrows to avoid unicode error
        clean_p = clean_p.replace('\u2192', '->')
        print(clean_p)
