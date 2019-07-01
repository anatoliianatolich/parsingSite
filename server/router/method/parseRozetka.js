const puppeteer = require("puppeteer");

const parseRozetka = async (req, res, next) => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('');

    console.log(page.content());
    await page.screenshot({path: 'screenshot.png'});

    await browser.close();
};

module.export = parseRozetka;
