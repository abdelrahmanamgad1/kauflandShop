import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  productId: string | null = null;
  productInformation: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      if (this.productId) {
        this.http
          .get(`https://dummyjson.com/products/${this.productId}`)
          .subscribe((data: any) => {
            this.productInformation = data;
          });
      }
    });
  }
}
