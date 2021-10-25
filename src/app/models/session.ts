import { Eenseignant } from "./enseignant";
import { formation } from "./formation";

export class session {
   
    id?:string
    nom?:String;
    d2d?:Date;
    d2c?:Date;
    nbheures?:String;
    prix?:String;
    formation?:formation;
    formateur?:Eenseignant;
img?:any

   
}