import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  navigateToOrder(): void {
    this.router.navigate(["order"])
  }

}
