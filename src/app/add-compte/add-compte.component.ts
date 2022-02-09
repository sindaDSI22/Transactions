import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/compte.model';
import { TransactionService } from '../serices/transaction.service';
import { TransactionsComponent } from '../transactions/transactions.component';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {
  
  newCompte = new Compte;
  constructor(private compteservice : TransactionService) { }
  addCompte(){
    this.compteservice.ajouterCompte(this.newCompte);
  }
  ngOnInit(): void {
  }

}
