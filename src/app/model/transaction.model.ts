import { Compte} from "./compte.model";

export class Transaction {
    idTransaction : number;
    montant : number;
    compte : string ; 
    dateTransaction : Date;
    descriptif : String;
    cpt : Compte
}