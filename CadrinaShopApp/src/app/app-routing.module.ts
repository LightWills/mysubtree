import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from './orders/order/order.component';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent} from './orders/orders.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full'},
  { path: 'orders', component: OrdersComponent },
  { path: 'order', children: [
      {path: '', component: OrderComponent},
      {path: 'edit/id', component: OrderComponent},

    ]}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
