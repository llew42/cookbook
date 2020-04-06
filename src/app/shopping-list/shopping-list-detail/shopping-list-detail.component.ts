import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-detail',
  templateUrl: './shopping-list-detail.component.html',
  styleUrls: ['./shopping-list-detail.component.scss']
})
export class ShoppingListDetailComponent implements OnInit {
  name: '';
  amount: null;
  note: ''
  submitted = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount, value.note)
    this.shoppingListService.addIngredient(newIngredient);

    form.resetForm();
  }

}
