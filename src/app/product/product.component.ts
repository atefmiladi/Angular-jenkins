import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 
  list : any = [];

  page:number = 1;
  
  constructor(private productService:ProductService,private dialogRef:MatDialog) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe( res => this.list = res );
  }

  openDialog(){
   this.dialogRef.open(AddProductComponent);
  }

}
