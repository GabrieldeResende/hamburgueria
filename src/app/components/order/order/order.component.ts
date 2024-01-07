import { Component, OnInit } from '@angular/core';
import { Order } from '../oder.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products: Order[] = []

  // products: Order = {
  //   description: '',
  //   img: '',
  //   name: '',
  //   price: 0
  // }

  displayedColumns = ['id', 'name', 'description', 'price', 'action']
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.read().subscribe(products => {
      this.products = products
    })
  }

}
