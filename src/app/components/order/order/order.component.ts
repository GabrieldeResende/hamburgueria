import { Component, OnInit } from '@angular/core';
import { Order } from '../oder.model';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private orderService: OrderService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.orderService.read().subscribe(products => {
      this.products = products
    })
  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get("id") ?? ""
    this.orderService.delete(id).subscribe(() => {
      this.orderService.showMessage("Produto Excluido!")
    })
  }

}
