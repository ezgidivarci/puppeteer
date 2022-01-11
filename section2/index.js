//listing brand names

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch(); // {headless : false} tarayıcıyı görmemizi sağlıyor
  const page = await browser.newPage();
  await page.goto('https://www.modanisa.com/elbise.list');
  //await page.screenshot({ path: 'example.png' });

  const result = await page.evaluate (() => {
    let brandNames = document.querySelectorAll(".brand")
    const brandList = [...brandNames]
    return brandList.map(b => b.innerText)

  });
  console.log(result);

  await browser.close();
})();
