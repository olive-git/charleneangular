import { Routes } from '@angular/router';
import { ProductForm, ProductList } from './products';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductList },
    { path: 'products/new', component: ProductForm }
];
