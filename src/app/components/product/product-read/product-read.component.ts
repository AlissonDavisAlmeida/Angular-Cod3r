import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../produto.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  produtos : Product[];
  
  displayedColumns: string[] = ['id', 'nome'];
  constructor(private productServ : ProductService) { }

  ngOnInit(): void {

    this.productServ.read().subscribe(products => {
      this.produtos = products;
    })
  }

}
