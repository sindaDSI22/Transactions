import { Injectable } from '@angular/core';
import { getMaxListeners } from 'process';
import { Compte } from '../model/compte.model';
import { Transaction } from '../model/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions : Transaction[];
  comptes : Compte[];
  constructor() { 
    this.comptes = [{idCompte : 1 , libelle : "mohamed@yahoo.com" , MotDePasse :"12345",solde:9000.000},
    {idCompte : 2 , libelle : "salma@gmail.com" , MotDePasse :"1234",solde:1500.200}
  ];
    this.transactions = [
      {idTransaction : 1 , montant : 1500.200 ,compte : "debite" ,descriptif:"rrr" , dateTransaction: new Date("01/01/2022" ),
      cpt :{idCompte :1 ,libelle : "mohamed@yahoo.com" , MotDePasse :"12345" ,solde:9000.000}},

      {idTransaction : 2 , montant : 250.200 ,compte : "credite" , descriptif:"kii" ,dateTransaction: new Date("02/10/2020"),
      cpt :{idCompte :1 ,libelle : "mohamed@yahoo.com" , MotDePasse :"12345" ,solde:9000.000}},

      {idTransaction : 3 , montant : 20170.200 ,compte : "debite" ,descriptif:"oo" , dateTransaction: new Date("05/06/2020"),
      cpt :{idCompte :2 ,libelle : "salma@gmail.com" , MotDePasse :"1234",solde:1500.200 }}

    ] ;
  }
  listeTransactions() : Transaction[]{
    return this.transactions;
  }

  
  listeComptes() : Compte[]{
    return this.comptes;
  }
  compte = new Compte();
  consulterCompte(id:Number) : Compte{
    this.compte = this.comptes.find(cpt => cpt.idCompte == id);
    return this.compte;
  }

  ajouterCompte(c : Compte){
     this.comptes.push(c);
  }
  supprimerCompte( cpte: Compte){
   
    const index = this.comptes.indexOf(cpte, 0);
    if (index > -1) {
    this.comptes.splice(index, 1);
    }
  } 

}
