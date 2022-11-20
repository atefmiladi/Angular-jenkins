import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm !:FormGroup;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productForm = new FormGroup({
      codeProduit: new FormControl(''),
      libelleProduit: new FormControl(''),
      prix: new FormControl(''),
      dateCreation: new FormControl(''),
      dateDerniereModification: new FormControl(''),
      
    });
  }

  addProduct(){
    this.productService.createProduct(this.productForm.value).subscribe(res => console.log(res));
  }

}
