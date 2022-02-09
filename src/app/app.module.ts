import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FormsModule } from '@angular/forms';
import { ComptesComponent } from './comptes/comptes.component';
import { AddCompteComponent } from './add-compte/add-compte.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    ComptesComponent,
    AddCompteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
