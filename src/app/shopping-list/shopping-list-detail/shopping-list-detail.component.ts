import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-detail',
  templateUrl: './shopping-list-detail.component.html',
  styleUrls: ['./shopping-list-detail.component.scss']
})
export class ShoppingListDetailComponent implements OnInit {

  category = {
    name: ['Vegetable', 'Fruit', 'Bakery', 'Dairy', 'Meat', 'Canned Goods', 'Desserts', 'Cookies', 'Cereal']
  }

  constructor() { }

  ngOnInit(): void {
  }

}
