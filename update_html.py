with open(r'C:\Users\Noman Traders\Desktop\PQS\PQS_Company_Profile.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('logo_transparent_v2.png', 'pqs_3letter_white.png')
html = html.replace('width:220px;', 'width:120px;')

with open(r'C:\Users\Noman Traders\Desktop\PQS\PQS_Company_Profile.html', 'w', encoding='utf-8') as f:
    f.write(html)
