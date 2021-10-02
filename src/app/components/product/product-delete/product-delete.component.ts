import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../produto.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {


  produto: Product;

  constructor(private produtoService: ProductService, private root: Router, private action: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.action.snapshot.paramMap.get("id");
    this.produtoService.readById(id).subscribe(p => {
      this.produto = p;
    });

  }

  cancelar(): void {
    this.root.navigate(["/products"]);

  }

  delete() {
    if (confirm("Tem certeza que deseja apagar o item?")) {
      this.produtoService.delete(this.produto.id.toString()).subscribe(() => {
        this.produtoService.showMessage("Produto Removido com Sucesso")
      });
      this.root.navigate(["/products"]);
    } else {

    }
  }

}
