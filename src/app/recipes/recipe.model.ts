import { Ingredient } from '../models/ingredient.model';

export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  imageCaption: string;
  ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, imageCaption: string, ingredients: Ingredient[]){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.imageCaption = imageCaption;
    this.ingredients = ingredients;
  }
}
