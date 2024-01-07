import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from './oder.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = "http://localhost:3000/products"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    })
  }


  create(order: Order): Observable<Order> {
    return this.http. post<Order>(this.baseUrl, order)
  }

  read(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl)
  }
}
