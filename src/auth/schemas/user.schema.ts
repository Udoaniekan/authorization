import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";



export type userDocument= HydratedDocument<User>

@Schema()
export class User{
    @Prop()
    name: string;
    @Prop({unique: [true, 'Duplicate email entered']})
    email: string;
    @Prop()
    password: string;
   
}

export const userSchema=SchemaFactory.createForClass(User);

