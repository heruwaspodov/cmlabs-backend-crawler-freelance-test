import { Request as Req, Response as Res } from 'express';
import { Response } from '@/types/response'
import { crawlSite } from "./utils";

export const crawler = async (req: Req, res: Res) => {
    let post       = req.body;

    await crawlSite(post.link, './files/result.html')

    const data:Response = {
        status: true,
        code: 200,
        data: post
    }
    return res.status(200).json(data)
}


