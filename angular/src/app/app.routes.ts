import { Routes } from '@angular/router';
import { ProductList } from './products/product-list/product-list';
import { ProductForm } from './products/product-form/product-form';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductList },
    { path: 'products/new', component: ProductForm }
];
