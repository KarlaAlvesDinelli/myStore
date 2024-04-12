import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../../services/products-list.service';
import { product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  searchTerm: string = '';
  products: product[] = [];
  searchKey: string = '';
  constructor(private service: ProductsListService) {}

  ngOnInit(): void {
    this.getProducts();

    this.service.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      console.log(res);
      this.products = res.products;
    });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.service.search.next(this.searchTerm);
  }
}
