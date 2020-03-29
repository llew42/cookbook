import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  // recipe = {
  //   name: 'Cheesy Ground Beef Tacos',
  //   instructions: 'Give me tacos, or give me death. Josh’s taco shack is the best taco shack. Let’s do a beef and a chicken, and one with both. Black or pinto beans? It’s raining tacos, from out of the sky, tacos, don’t even ask why. Give me tacos, or give me death. Fish tacos with cabbage slaw and a side of chips and guac. Tacos dorados called flautas, or taquitos, for which the tortillas are filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp.',
  //   steps: ['1. Heat pan on medium with avocado oil',
  //     '2. Mix seasonings into ground beef then place in hot pan',
  //     '3. As meat begins to brown add cheese to the pan and let melt DO NOT STIR ',
  //     '3. Next add sour cream, STILL DO NOT stir',
  //     '5. Finally top with your choice of hot sauce and stir'
  //   ],
  //   ingredients: ['Ground Beef', 'Sour Cream', 'Shredded Cheese Blend', 'Avocado Oil',]
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
