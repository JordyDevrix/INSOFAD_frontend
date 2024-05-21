import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductsService} from "../services/products.service";
import {Product} from "../models/product.model";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CurrencyPipe
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  public products: Product[] = [];
  public addProduct: FormGroup;

    constructor(
        private productsService: ProductsService,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
      this.productsService.getProducts().subscribe((products) => {
        this.products = products;
      });
      this.addProduct = this.fb.group({
        name: [''],
        brand: [''],
        price: [''],
        description: [''],
        size: [''],
        material: [''],
        color: [''],
        image: [''],
        category: ['']
      });
    }

  onRemoveProduct(id: number) {
    this.productsService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }

  onAddProduct() {

  }

  onRemoveVariant(id: number) {

  }
}
