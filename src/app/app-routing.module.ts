import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BurgersComponent } from './views/burgers/burgers.component';
import { OrderComponent } from './components/order/order/order.component';
import { DessertComponent } from './views/dessert/dessert.component';
import { DrinksComponent } from './views/drinks/drinks.component';
import { OfferComponent } from './views/offer/offer.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "burguers", component: BurgersComponent},
  {path: "order", component: OrderComponent},
  {path: "dessert", component: DessertComponent},
  {path: "drinks", component: DrinksComponent},
  {path: "offer", component: OfferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
