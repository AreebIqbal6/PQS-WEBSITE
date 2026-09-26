import re
with open(r'C:\Users\Noman Traders\Desktop\PQS\PQS_Company_Profile.html', 'r', encoding='utf-8') as f:
    html = f.read()

idx = html.find('Our Service Model')
if idx != -1:
    s = html[max(0, idx-1000):idx+1500]
    s = re.sub(r'data:image/[^;]+;base64,[A-Za-z0-9+/=]+', '...', s)
    s = s.encode('ascii', 'ignore').decode('ascii')
    print(s)
