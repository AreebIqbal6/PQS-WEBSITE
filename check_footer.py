import re
with open(r'C:\Users\Noman Traders\Desktop\PQS\PQS_Company_Profile.html', 'r', encoding='utf-8') as f:
    html = f.read()

pages = re.split(r'<div\s+class="page[^>]*">', html)
if len(pages) > 4:
    p4 = pages[4]
    if '<div class="ftr">' in p4:
        print('Footer exists in Page 4 HTML!')
        print(p4[-500:])
    else:
        print('Footer is MISSING from Page 4 HTML!')
