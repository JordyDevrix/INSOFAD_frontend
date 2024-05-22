import {Component, OnInit} from '@angular/core';
import {NavComponent} from "../nav/nav.component";
import {Order} from "../../models/order.model";
import {OrderService} from "../../services/order.service";
import {CurrencyPipe} from "@angular/common";

@Component({
    selector: 'app-stats',
    standalone: true,
    imports: [
        NavComponent,
        CurrencyPipe
    ],
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnInit {
    public orders: Order[] = [];
    public totalProfit: number;
    public biggestOrder: Order;

    constructor(
        private orderService: OrderService
    ) {}

    ngOnInit(): void {
        this.orderService.getAllOrders().subscribe((orders) => {
            this.orders = orders;
            this.totalProfit = this.orders.map(order => order.totalPrice).reduce((a, b) => a + b, 0);
            this.biggestOrder = this.orders.reduce((a, b) => a.totalPrice > b.totalPrice ? a : b);
            console.log(orders);
        });

    }
}
