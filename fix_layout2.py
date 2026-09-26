import os
path = r'C:\Users\Noman Traders\Desktop\PQS\PQS_Company_Profile.html'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('margin: 0 30mm 20px 30mm;', 'margin: 0 30mm 15px 30mm;')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)
