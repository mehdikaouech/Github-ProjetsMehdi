import { session } from "./session";

export class Etudiant {
    role ?: string;
    nom ?: string;
    prenom ?:string;
    cin ?: Number;
    email ?: string;
    telephone ?: Number;
    linkedin ?: string;
    pwd ?: string;
    session ?: session;
    
}