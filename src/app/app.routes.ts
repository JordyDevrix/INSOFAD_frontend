import { Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'cart', component: CartComponent },
  {path: 'orders', component: OrderHistoryComponent},
  {path: 'account/login', component: LoginComponent },
  {path: 'account/register', component: RegisterComponent}
];
