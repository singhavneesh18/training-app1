import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/product.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product =new Product(241, "Product1", 
  "Product 1 Desc", 
  "https://wpengine.com/wp-content/uploads/2016/11/cdn_source-1500x248.png",
   2, []);
  product2: Product = {
    id: 2,
    title: "product2",
    description: "product2 desc", 
    imagepath:"https://web-dev.imgix.net/image/admin/OIF2VcXp8P6O7tQvw53B.jpg?auto=format", 
    quantity: 1, comments:[]
  };
  testString: string= "Test string";

  constructor() { }

  ngOnInit(): void {
  }

}
