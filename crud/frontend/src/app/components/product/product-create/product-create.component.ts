import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  propLegal = 'qualquer'

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(){
    this.productService.showMessage('Produto criado!')
  }

  cancel(){
    this.router.navigate(['/products'])
  }

}
