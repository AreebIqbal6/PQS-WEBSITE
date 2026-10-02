const https = require('https');

const url = 'https://unsplash.com/photos/assorted-color-thread-lot-Nh6NsnqYVsI';

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Find any images.unsplash.com URL
        const matches = data.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+[^"']+/g);
        if (matches) {
            console.log("Found:", matches[0]);
        } else {
            console.log("None found.");
            // write to file for inspection
            require('fs').writeFileSync('unsplash.html', data);
        }
    });
});
