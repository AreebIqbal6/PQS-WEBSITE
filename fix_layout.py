import os
path = r'C:\Users\Noman Traders\Desktop\PQS\PQS_Company_Profile.html'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('min-height: 297mm; height: auto;', 'height: 297mm;')
c = c.replace('overflow: visible;', 'overflow: hidden;')
c = c.replace('class="image-strip" alt="Raw Cotton" style="height: 180px;"', 'class="image-strip" alt="Raw Cotton" style="height: 120px;"')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)
