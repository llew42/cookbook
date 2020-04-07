import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-detail',
  templateUrl: './shopping-list-detail.component.html',
  styleUrls: ['./shopping-list-detail.component.scss']
})
export class ShoppingListDetailComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingListForm', {static: false}) shoppingListForm: NgForm;
  subscription: Subscription;
  submitted = false;
  editMode = false;
  editedIngredientIndex: number;
  editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredientEdit();
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount, value.note)
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedIngredientIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.resetForm();
  }

  ingredientEdit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedIngredientIndex = index;
        this.editMode = true;
        this.editedIngredient = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount,
          note: this.editedIngredient.notes,
        });
      }
    );
  }

  onClear() {
    this.shoppingListForm.resetForm();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedIngredientIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
