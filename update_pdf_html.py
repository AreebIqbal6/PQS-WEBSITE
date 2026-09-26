import os
path = r'C:\Users\Noman Traders\Desktop\PQS\PQS_Company_Profile.html'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('.step { padding: 20px;', '.step { padding: 12px 15px;')
c = c.replace('gap: 15px; margin: 0 30mm 15px 30mm;', 'gap: 10px; margin: 0 30mm 10px 30mm;')
c = c.replace('margin: 0 30mm 15px 30mm; padding: 15px 25px;', 'margin: 0 30mm 10px 30mm; padding: 10px 20px;')
c = c.replace('gap: 20px; margin: 0 30mm 15px 30mm;', 'gap: 15px; margin: 0 30mm 10px 30mm;')
c = c.replace('.phil { page-break-inside: avoid; break-inside: avoid; background: var(--navy); padding: 20px;', '.phil { page-break-inside: avoid; break-inside: avoid; background: var(--navy); padding: 15px;')

cover_img = r'<img src="file:///C:/Users/Noman%20Traders/Desktop/PQS/pqs-website/public/logo_transparent_v2.png" class="cover-logo" style="width:220px; height:auto; margin:0 auto 20px; display:block;">'
c = c.replace('<div class="cover-div"></div>', cover_img + '\n  <div class="cover-div"></div>')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)
