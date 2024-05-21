import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductsService} from "../services/products.service";
import {Product} from "../models/product.model";
import {CurrencyPipe} from "@angular/common";
import {Router} from "@angular/router";

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
        private fb: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.productsService.getProducts().subscribe((products) => {
            this.products = products;
        });
        this.addProduct = this.fb.group({
            name: [''],
            brand: [''],
            description: [''],
            image: [''],
            category: ['']
        });
    }

    onRemoveProduct(id: number) {
        this.productsService.removeProduct(id).subscribe(() => {
            this.products = this.products.filter(product => product.id !== id);
        });
        window.location.reload();
    }

    onAddProduct() {

    }

    onRemoveVariant(id: number) {
        this.productsService.removeVariant(id).subscribe(() => {
            this.products = this.products.filter(product => product.id !== id);
            console.log(id)
        });
        window.location.reload();
    }
}
