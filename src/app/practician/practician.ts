import { User } from "../_models";

export interface Practician {
   id : number,
   email: string,
   nom: string,
   prenoms: string,
   signature: string,
   speciliaty_id: number,
   telephone: string,
   actCategory: any,
   user: User
}