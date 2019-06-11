import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ItemService} from '../../shared/service/item.service';
import {OrderService} from '../../shared/service/order.service';
import {OrderItem} from '../../shared/model/order-item.model';
import {Item} from '../../shared/model/item.model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  formData: OrderItem;
  itemList: Item[];
  isValid = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private itemService: ItemService,
    private orderSevice: OrderService
  ) { }

  ngOnInit() {
    this.formData = {
      OrderItemID: null,
      orderID: this.data.OrderID,
      itemID: 0,
      ItemName: '',
      Price: 0,
      quantity: 0,
      Total: 0
    };
  }

  updateTotal() {

  }

  updatePrice(target: EventTarget) {

  }
}
