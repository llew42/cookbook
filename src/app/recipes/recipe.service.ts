import { Injectable, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cheesy Ground Beef Tacos',
      'Give me tacos, or give me death. Josh’s taco shack is the best taco shack. Let’s do a beef and a chicken, and one with both. Black or pinto beans? It’s raining tacos, from out of the sky, tacos, don’t even ask why. Give me tacos, or give me death.',
      'https://c1.peakpx.com/wallpaper/680/1003/801/taco-beef-mexican-food-wallpaper-preview.jpg',
      'Delicously cheesy ground beef tacos',
      [
        new Ingredient('Meat', 1, '85/15'),
        new Ingredient('Cheese', 1, 'Mexican blend'),
        new Ingredient('Sour Cream', 1, ''),
        new Ingredient('Pinto Beans', 1, 'Or black beans'),
        new Ingredient('Tortillas', 5, 'Whole wheat?'),
      ]),
    new Recipe(
      'Cheesy Enchiladas',
      'Tacos dorados called flautas, or taquitos, for which the tortillas are filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp.',
      'https://www.simplyrecipes.com/wp-content/uploads/2006/04/red-chili-chicken-enchiladas-horiz-b-1700.jpg',
      'Spicy Red Sauce Enchilads',
      [
        new Ingredient('Cheese', 2, 'Mexican Blend'),
        new Ingredient('Hot Sauce', 1, 'Any hispanic sauce you\'d like'),
        new Ingredient('Red Sauce', 2, 'Try green?'),
        new Ingredient('Rice', 3, 'Get seasoning for it'),
        new Ingredient('Tortillas', 3, 'large'),
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
