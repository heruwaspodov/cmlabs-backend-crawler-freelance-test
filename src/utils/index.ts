import * as puppeteer from 'puppeteer';
import { crawlCmlabs } from "./cmlabs";
import { crawlSequence } from "./sequence";
import { crawlTokopedia } from "./tokopedia";
import { getDomainName } from "./domain";
import { writeContent } from "./file";

export const crawl = async (url: string, filePath: string) => {
    try {
        const browser = await puppeteer.launch({headless: false})
        const page = await browser.newPage()
        await page.setViewport({width: 1920, height: 1080, deviceScaleFactor: 1})
        await page.setJavaScriptEnabled(true)
        await page.setDefaultNavigationTimeout(0)
        await page.goto(url, {waitUntil: "networkidle0"})

        const domain = getDomainName(url)

        switch (domain) {
            case 'cmlabs.co':
                await crawlCmlabs(page, url, filePath)
                break
            case 'sequence.day':
                await crawlSequence(page, url, filePath)
                break
            case 'tokopedia.com':
                await crawlTokopedia(page, url, filePath)
                break
            default:
                const htmlContent = await page.content()
                await writeContent(filePath, htmlContent)
                console.log('HTML saved successfully!')
        }

        await browser.close()
    } catch (error) {
        console.error('Error crawling website:', error);
        return false;
    }
}
