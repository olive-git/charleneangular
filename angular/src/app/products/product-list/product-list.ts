import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../model';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | undefined = undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  showProductDetail(product: Product) {
    this.selectedProduct = product;
  }

  hideProductDetail(){
    this.selectedProduct = undefined;
  }
}
