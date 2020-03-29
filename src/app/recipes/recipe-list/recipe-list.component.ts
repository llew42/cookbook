import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cheesy Ground Beef Tacos', 'Give me tacos, or give me death. Josh’s taco shack is the best taco shack. Let’s do a beef and a chicken, and one with both. Black or pinto beans? It’s raining tacos, from out of the sky, tacos, don’t even ask why. Give me tacos, or give me death. Fish tacos with cabbage slaw and a side of chips and guac. Tacos dorados called flautas, or taquitos, for which the tortillas are filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp.', 'https://c1.peakpx.com/wallpaper/680/1003/801/taco-beef-mexican-food-wallpaper-preview.jpg')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipePath(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
