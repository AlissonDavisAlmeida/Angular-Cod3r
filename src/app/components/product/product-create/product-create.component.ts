import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Router} from '@angular/router';
import { Product } from '../produto.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  produto : Product ={
    name : "",
    price : null
  }

  constructor(private product : ProductService, private router : Router) { }

  ngOnInit(): void {

    
  }

  create(): void{
      this.product.create(this.produto).subscribe(() => {
        this.product.showMessage("Gravado com sucesso!");
        this.router.navigate(["/products"]);
      }
      );

    }
 
  cancelar():void{
    this.router.navigate(["/products"]);
  }
}
