import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecteurActiviteService {



  constructor(private http:HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  createSecteurActivite() { 

    return this.http.get(`${this.apiServerUrl}/SpringMVC/secteurActivite/retrieve-all-secteurActivite`);
  
  }


 getAllSecteurActivite() {  

  return this.http.get(`${this.apiServerUrl}/SpringMVC/secteurActivite/retrieve-all-secteurActivite`);

     }

  





}
