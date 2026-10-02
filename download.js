const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
    'https://unsplash.com/photos/assorted-color-thread-lot-Nh6NsnqYVsI',
    'https://unsplash.com/photos/hands-holding-fluffy-white-cotton-bolls-64xejgIm15o',
    'https://unsplash.com/photos/intricate-gold-embroidery-with-waves-and-floral-motifs-lYa0atgEwsI',
    'https://unsplash.com/photos/a-person-in-a-lab-coat-9SCof6uWKcs',
    'https://unsplash.com/photos/a-row-of-machines-that-are-next-to-each-other-mBXQCNKbq7E'
];

const dir = path.join(__dirname, 'public', 'unsplash');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download() {
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        console.log(`Fetching ${url}`);
        
        try {
            const html = await new Promise((resolve, reject) => {
                https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
                    let data = '';
                    res.on('data', chunk => data += chunk);
                    res.on('end', () => resolve(data));
                }).on('error', reject);
            });
            
            const match = html.match(/property="og:image"\s+content="([^"]+)"/);
            if (match) {
                const imgUrl = match[1].replace(/&amp;/g, '&');
                console.log(`Found image: ${imgUrl}`);
                
                await new Promise((resolve, reject) => {
                    https.get(imgUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
                        const fileStream = fs.createWriteStream(path.join(dir, `img_${i}.jpg`));
                        res.pipe(fileStream);
                        fileStream.on('finish', () => {
                            fileStream.close();
                            resolve();
                        });
                    }).on('error', reject);
                });
                console.log(`Saved img_${i}.jpg`);
            } else {
                console.log(`No image found in meta tags for ${url}`);
            }
        } catch(e) {
            console.error(`Failed ${url}: ${e.message}`);
        }
    }
}

download();
