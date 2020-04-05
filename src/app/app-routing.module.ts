import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
// import { MainComponent } from './main/main.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListDetailComponent } from './shopping-list/shopping-list-detail/shopping-list-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [{
  path: '',
  redirectTo: '/recipes',
  pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [{
      path: '',
      component: RecipeStartComponent
    },
    {
      path: ':id',
      component: RecipeDetailComponent
    },
    {
      path: 'new',
      component: RecipeEditComponent
    }]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    children: [{
      path: 'details',
      component: ShoppingListDetailComponent
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
