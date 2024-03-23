export const isLinkValid = async (url: string): Promise<boolean> => {
    try {
        const response = await fetch(url, { method: 'GET' });
        return response.ok
    } catch {
        return false
    }
}