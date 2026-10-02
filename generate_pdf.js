const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true, // Use old headless to avoid OS DPI scaling
    args: ['--force-device-scale-factor=1']
  });
  const page = await browser.newPage();
  
  const htmlPath = 'file:///C:/Users/Noman%20Traders/OneDrive/Desktop/PQS/PQS_Company_Profile.html';
  const pdfPath = 'C:\\Users\\Noman Traders\\OneDrive\\Desktop\\PQS\\PQS_Company_Profile.pdf';
  
  await page.goto(htmlPath, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  
  await browser.close();
  console.log('PDF generated successfully!');
})();
