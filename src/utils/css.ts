import * as puppeteer from 'puppeteer';

export async function getCssLink(page: puppeteer.Page): Promise<string[]> {
    const cssLinks = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
        return links.map(link => link.getAttribute('href') || '');
    });
    return cssLinks;
}

// export const getCssLink = async (page: any, htmlContent: string): Promise<string> => {
//     const cssLinks = await page.evaluate(() => {
//         const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
//         return links.map(link => link.getAttribute('href'))
//     });
//
//     for (const cssLink of cssLinks) {
//         if (cssLink) {
//             const cssContent = await page.evaluate(async (cssLink: string) => {
//                 const response = await fetch(cssLink);
//                 return response.text();
//             }, cssLink);
//             // Embed CSS content into HTML using <style> tag
//             htmlContent += `<style>${cssContent}</style>`;
//         }
//     }
//
//     return htmlContent
// }