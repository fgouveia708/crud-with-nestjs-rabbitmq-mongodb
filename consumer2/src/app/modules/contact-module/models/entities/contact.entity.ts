import { Document } from "mongoose";
export class Contact extends Document {
    name: string;
    email: string;
}
