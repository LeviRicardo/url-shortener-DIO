import mongoose from "mongoose";
import { config } from "../config/Constants";

export class MongoConnection{
    public async conectar(): Promise<void>{
        try{
            await mongoose.connect(config.MONGO_CONNECTION)
            console.log("DB Conectada")
            } catch(err){
                console.log(err.message)
                process.exit(1)
        }
    }
}
