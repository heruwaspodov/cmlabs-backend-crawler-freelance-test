export const getDomainName = (url: string): string => {
    const urlObject = new URL(url);

    let hostname: string = urlObject.hostname;
    hostname = hostname.replace(/^www\./i, '');

    const parts: string[] = hostname.split('.');
    return parts.slice(-3).join('.');
}