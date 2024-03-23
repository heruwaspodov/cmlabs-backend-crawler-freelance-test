import { Request as Req } from "express";
import { isLinkValid } from "../utils/link";
import { RequestCrawl } from "@/types/request";

export const validateCrawler = async (req: Req): Promise<boolean> => {
    if (isEmptyObject(req.body)) return false

    const post: RequestCrawl = req.body;
    return await isLinkValid(post.link)
}

export const isEmptyObject = (obj: Record<string, any>) => {
    return Object.keys(obj).length === 0;
};