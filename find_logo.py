import re
with open(r'C:\Users\Noman Traders\Desktop\PQS\PQS_Company_Profile.html', 'r', encoding='utf-8') as f:
    html = f.read()
idx = html.lower().find('our service model')
if idx != -1:
    s = html[idx:idx+1500]
    s = re.sub(r'data:image/[^;]+;base64,[^"]+', '...', s)
    s = s.encode('ascii', 'ignore').decode('ascii')
    print(s)
