import { Component, OnInit } from '@angular/core';
import { SecteurActiviteService } from '../services/secteur-activite.service';

@Component({
  selector: 'app-secteur-activite',
  templateUrl: './secteur-activite.component.html',
  styleUrls: ['./secteur-activite.component.css']
})
export class SecteurActiviteComponent implements OnInit {

  
  list : any = [];
  

  constructor(private secteurActiviteService:SecteurActiviteService) { }


  ngOnInit(): void {
    
    this.secteurActiviteService.getAllSecteurActivite().subscribe( res => this.list = res );
  }

}
