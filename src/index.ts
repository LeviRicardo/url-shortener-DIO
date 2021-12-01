import { URLcontroller } from "./controller/URLcontroller";
import express, {Request, Response} from "express";
import { MongoConnection } from "./db/MongoCOnnection";

const api = express()
api.use(express.json())

const db = new MongoConnection
db.conectar()

const urlController = new URLcontroller
api.post('/encurtador', urlController.shorten)

api.get('/:hash', urlController.redirecionar)



api.listen(5000, ()=>console.log("Servidor Aberto"))