import { prop, Typegoose } from "@hasezoey/typegoose";

export class URL extends Typegoose{
    @prop({required: true})
    hash: string
    
    @prop({required: true})
    urlOriginal: string
    
    @prop({required: true})
    encurtada: string
}

export const URLModel = new URL().getModelForClass(URL)