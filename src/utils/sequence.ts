import * as puppeteer from 'puppeteer';
import { writeContent } from "./file";

export const crawlSequence = async (page: puppeteer.Page, url: string, filePath: string) => {
    try {
        const scrollAmount = 1000

        await page.evaluate((scrollAmount: number) => {
            window.scrollBy(0, scrollAmount)
        }, scrollAmount)


        const href = await page.evaluate(() => {
            const anchorElement = document.querySelector('a.mktseqgtm-login-wp-navbar')
            return anchorElement ? anchorElement.getAttribute('href') : null
        })

        if (href) {
            await page.goto(href);
            const htmlContent = await page.content()
            await writeContent(filePath, htmlContent)
            console.log('HTML saved successfully!')
        } else {
            console.log('Href attribute is null.')
        }

        return true
    } catch (error) {
        console.error('Error crawling website:', error);
        return false
    }
}