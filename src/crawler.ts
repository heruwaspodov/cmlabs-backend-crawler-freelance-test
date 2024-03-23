import { Request as Req, Response as Res } from 'express';
import { Response } from '@/types/response'
import { processDirectory } from "./utils/file";
import { getDomainName } from "./utils/domain";
import { crawl } from "./utils";

export const crawler = async (req: Req, res: Res) => {
    const post = req.body;
    const dir = './files/' + getDomainName(post.link)
    const path = dir + '/index.html'

    await processDirectory(dir)
    await crawl(post.link, path)

    const data:Response = {
        status: true,
        code: 200,
        data: {
            url: post.link,
            path: path
        }
    }
    return res.status(200).json(data)
}


