import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsListService } from '../../services/products-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  data: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: ProductsListService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.service.getProductById(this.id).subscribe((res) => {
      this.data = res;
    });
  }
}
