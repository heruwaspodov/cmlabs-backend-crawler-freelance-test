import * as puppeteer from 'puppeteer';
import { writeContent } from "./file";

export const crawlCmlabs = async (page: puppeteer.Page, url: string, filePath: string) => {
    try {
        const linkTag = await page.$('link[rel="alternate"][hreflang="id-id"]')
        if (linkTag) {
            const href = await page.evaluate((link) => link.getAttribute('href'), linkTag)

            if (href) {
                await page.goto(href);
                const htmlContent = await page.content()
                await writeContent(filePath, htmlContent)
                console.log('HTML saved successfully!')
            } else {
                console.log('Href attribute is null.')
            }
        } else {
            console.log('Link with hreflang="en-id" not found.')
        }

        return true
    } catch (error) {
        console.error('Error crawling website:', error)
        return false
    }
}