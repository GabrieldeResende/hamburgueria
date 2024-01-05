import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BurgersComponent } from './views/burgers/burgers.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "burguers", component: BurgersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
