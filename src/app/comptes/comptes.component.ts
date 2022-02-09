import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/compte.model';
import { TransactionService } from '../serices/transaction.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: []
})
export class ComptesComponent implements OnInit {
  comptes: Compte[];
  constructor(private compteservice: TransactionService) {
    this.comptes = compteservice.listeComptes();
  }
  supprimerCompte(c: Compte) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.compteservice.supprimerCompte(c);
  }

  ngOnInit(): void {
  }

}
