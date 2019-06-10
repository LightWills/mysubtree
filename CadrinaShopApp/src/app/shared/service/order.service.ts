import { Injectable } from '@angular/core';
import {Order} from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  formData: Order;
  constructor() { }
}
