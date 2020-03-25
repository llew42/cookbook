import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor() { }

  ngOnInit(): void {
    this.getShoppingList();
  }

  getShoppingList(){
    return "Shopping List 1";
  }

}
