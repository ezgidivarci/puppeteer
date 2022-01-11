const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      "headless" : false,
      "slowMo" : 50
  });
  const page = await browser.newPage();

  await page.setViewport({
      "width": 1440,
      "height": 1000
  });

  await page.goto('https://www.modanisa.com/membership/login/?return=%2F');
  await page.type('[name=phone]', 'xyz')
  await page.type('[name=password]', 'mypassword')
  await page.keyboard.press('Enter' , {delay:2000});

  await page.screenshot({ path: 'example.png' });


  await browser.close();
})();