import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

baseUrl: string = "http://localhost:3001/produtos";

  constructor(private snack : MatSnackBar, private http : HttpClient) { }

  showMessage(message : string) : void {
        this.snack.open(message, 'X',{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
        });
  }

  create(produto : Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, produto);
  }
}