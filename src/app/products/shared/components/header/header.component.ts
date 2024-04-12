import { Component, OnInit } from '@angular/core';
import { ProductsListService } from './../../../dashboard/products-list/services/products-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private service: ProductsListService) {}

  ngOnInit(): void {}
}
