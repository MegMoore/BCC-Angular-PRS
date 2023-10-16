import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},

  {path: "use/list", component: UserListComponent},
  {path: "use/detail/:id", component: UserDetailComponent},
  {path: "use/edit/:id", component: UserEditComponent},
  {path: "use/create", component: UserCreateComponent},
  
  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
