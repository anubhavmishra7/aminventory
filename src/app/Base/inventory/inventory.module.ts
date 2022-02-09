import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailysalesComponent } from './dailysales/dailysales.component';
import { SalesorderComponent } from './salesorder/salesorder.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [
  {
    path:'dailysales',
    component:DailysalesComponent
  },
  {
    path:'invoice',
    component:InvoiceComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'salesorder',
    component:SalesorderComponent
  }
]

@NgModule({
  declarations: [
    DailysalesComponent,
    SalesorderComponent,
    InvoiceComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule

  ]
})
export class InventoryModule { }
