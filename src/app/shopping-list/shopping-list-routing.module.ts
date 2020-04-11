import { AuthGuard } from '../auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListDetailComponent } from '../shopping-list/shopping-list-detail/shopping-list-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'details',
        component: ShoppingListDetailComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingListRoutingModule {}
