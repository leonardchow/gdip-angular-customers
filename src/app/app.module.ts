import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerService } from "./services/customerservice";
import { CustomerListComponent } from './components/customer-list.component';
import { CustomerDetailComponent } from './components/customer-detail.component';

let appRoutes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: 'customer/:id', component: CustomerDetailComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
