import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cheesy Ground Beef Tacos',
      'Give me tacos, or give me death. Josh’s taco shack is the best taco shack. Let’s do a beef and a chicken, and one with both. Black or pinto beans? It’s raining tacos, from out of the sky, tacos, don’t even ask why. Give me tacos, or give me death.',
      'https://c1.peakpx.com/wallpaper/680/1003/801/taco-beef-mexican-food-wallpaper-preview.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Sour Cream', 1),
        new Ingredient('Pinto Beans', 1),
        new Ingredient('Tortillas', 5),
      ]),
    new Recipe(
      'Cheesy Enchiladas',
      'Tacos dorados called flautas, or taquitos, for which the tortillas are filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp.',
      'https://c1.peakpx.com/wallpaper/680/1003/801/taco-beef-mexican-food-wallpaper-preview.jpg',
      [
        new Ingredient('Cheese', 2),
        new Ingredient('Red Sauce', 1),
        new Ingredient('Rice', 3),
        new Ingredient('Tortillas', 3),
      ]),
  ];

  constructor() { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    return this.recipes.slice();
  }

}
