import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComptesComponent } from './comptes/comptes.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddCompteComponent} from './add-compte/add-compte.component';
const routes: Routes = [
  {path:"transactions" , component: TransactionsComponent},
  {path:"comptes" , component: ComptesComponent},
  {path:"addcompte" , component: AddCompteComponent},
  { path: "", redirectTo: "transactions", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
