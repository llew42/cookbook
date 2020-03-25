import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];
  
  constructor() { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(){
    return "Recipe 1";
  }
}
