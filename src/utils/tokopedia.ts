import * as puppeteer from 'puppeteer';
import { writeContent } from "./file";

export const crawlTokopedia = async (page: puppeteer.Page, url: string, filePath: string) => {
    try {
        const searchQuery = 'jaket tracktop adidas original'
        await page.type('input[aria-label="Cari di Tokopedia"][data-unify="Search"]', searchQuery)
        await page.keyboard.press('Enter')
        const htmlContent = await page.content()
        await writeContent(filePath, htmlContent)

        return true
    } catch (error) {
        console.error('Error crawling website:', error);
        return false
    }
}