import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPageComponent } from './user-page/user-page.component';
import { UsersArrayComponent } from './users-array/users-array.component';

const routes: Routes = [
  {
    path: 'user-page',
    component: UserPageComponent
  },
  {
    path: 'users-array',
    component: UsersArrayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
