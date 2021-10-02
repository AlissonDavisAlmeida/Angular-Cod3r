import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../produto.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  produto: Product;

  constructor(private produteService: ProductService, private router: Router, private action: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.action.snapshot.paramMap.get("id");
    this.produteService.readById(id).subscribe(produto => {
      this.produto = produto;
    });

  }

  update(): void {
    this.produteService.update(this.produto).subscribe(() => {
      this.produteService.showMessage("Produto alterado com sucesso");
      this.router.navigate(["/products"]);  
    });
  }

  cancelar(): void {
    this.router.navigate(["/products"]);

  }

  delete(){
    if(confirm("Tem certeza que deseja apagar o item?")){
        this.produteService.delete(this.produto.id.toString()).subscribe(()=>{
          this.produteService.showMessage("Produto Removido com Sucesso")
        });
        this.router.navigate(["/products"]);
    }else{

    }
  }



}
