import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  createProduct(data:any) { 

    return this.http.post(`${this.apiServerUrl}/SpringMVC/produit/add-produit`, data);
  
  }


 getAllProducts() {  

  return this.http.get(`${this.apiServerUrl}/SpringMVC/produit/retrieve-all-produits`);

     }

}
