import * as fs from 'fs';
import * as puppeteer from 'puppeteer';

export const crawlSite = async (url: string, filePath: string) => {
    try {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        // await page.setDefaultNavigationTimeout(0);
        await page.goto(url);

        console.log(page)
        await page.waitForSelector('.cmlabs', { timeout: 0 });
        const htmlContent = await page.content();

        console.log('html', htmlContent)


        fs.writeFileSync(filePath, htmlContent);

        await browser.close();


        return true
    } catch (error) {
        console.error('Error crawling website:', error);
        return false;
    }
}

//~/Library/Application Support/Google/Chrome