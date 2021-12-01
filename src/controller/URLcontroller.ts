import { URLModel } from "../db/model/URL"
import { Request, Response } from "express"
import shortId from "shortid"
import { config } from "../config/Constants"


export class URLcontroller {
    public async shorten(req: Request, res: Response): Promise<void>{
        const {urlOriginal} = req.body

        const url = await URLModel.findOne({urlOriginal})
        if (url){
            console.log("URL já existente")
            res.json(url)
            return
        }
        const hash = shortId.generate()
        const encurtada = `${config.API_URL}/${hash}`
        const urlNova = await URLModel.create({hash, encurtada, urlOriginal})

        console.log("URL Encurtada")
        res.json(urlNova)
    }

    public async redirecionar(req: Request, res: Response): Promise<void>{
        const {hash} = req.params

        const url = await URLModel.findOne({hash})

        if (url){
            res.redirect(url.urlOriginal)
            return
        }

        res.status(400).json({error: "URL Não Encontrada"})
        
    }

}


