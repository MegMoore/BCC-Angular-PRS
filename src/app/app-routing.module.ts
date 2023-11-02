import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestlineDetailComponent } from './requestline/requestline-detail/requestline-detail.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},

  {path: "use/list", component: UserListComponent},
  {path: "use/detail/:id", component: UserDetailComponent},
  {path: "use/edit/:id", component: UserEditComponent},
  {path: "use/create", component: UserCreateComponent},
  {path: "use/login", component: UserLoginComponent},
  
  {path: "vend/list", component: VendorListComponent},
  {path: "vend/create", component: VendorCreateComponent},
  {path: "vend/detail/:id", component: VendorDetailComponent},
  {path: "vend/edit/:id", component: VendorEditComponent},
  
  {path: "prod/edit/:id", component: ProductEditComponent},
  {path: "prod/detail/:id", component: ProductDetailComponent},
  {path: "prod/create", component: ProductCreateComponent},
  {path: "prod/list", component: ProductListComponent},
  
  {path: "req/list", component: RequestListComponent},
  {path: "req/create", component: RequestCreateComponent},
  {path: "req/detail/:id", component: RequestDetailComponent},
  {path: "req/edit/:id", component: RequestEditComponent},
  {path: "req/lines/:id", component: RequestLinesComponent},
  {path: "req/rev/list", component: RequestReviewListComponent},
  {path: "req/rev/item/:id", component: RequestReviewItemComponent},
  
  {path: "reql/edit/:id", component: RequestlineEditComponent},
  {path: "reql/detail/:id", component: RequestlineDetailComponent},
  {path: "reql/create/:rid", component: RequestlineCreateComponent},
  

  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
