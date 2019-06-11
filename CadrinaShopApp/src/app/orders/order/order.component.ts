import {Component, Inject, OnInit} from '@angular/core';
import {OrderService} from '../../shared/service/order.service';
import {NgForm} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import {OrderItemsComponent} from '../order-items/order-items.component';
import {ItemService} from '../../shared/service/item.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private service: OrderService,
              private dialog: MatDialog,


  ) { }


  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form === null) {
      form.resetForm();
    }
    this.service.formData = {
      OrderID: null,
      OrderNO: Math.floor(100000 + Math.random() * 900000).toString(),
      customerID: 0,
      PMethod: '',
      GTotal: 0,
    };
    this.service.orderItems = [];

  }

  AddOrEditOrderItem(orderItemIndex, OrderID: number) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { orderItemIndex, OrderID };
    this.dialog.open(OrderItemsComponent, dialogConfig).afterClosed().subscribe(res => {
      // this.updateGrandTotal();
    });
  }
}
