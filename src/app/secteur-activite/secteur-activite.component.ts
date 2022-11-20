import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSecteurComponent } from '../add-secteur/add-secteur.component';
import { SecteurActiviteService } from '../services/secteur-activite.service';

@Component({
  selector: 'app-secteur-activite',
  templateUrl: './secteur-activite.component.html',
  styleUrls: ['./secteur-activite.component.css']
})
export class SecteurActiviteComponent implements OnInit {

  
  list : any = [];

  constructor(private secteurActiviteService:SecteurActiviteService,private dialogRef:MatDialog) { }


  ngOnInit(): void { 
    this.secteurActiviteService.getAllSecteurActivite().subscribe( res => this.list = res );
  }


  openDialog(){
   this.dialogRef.open(AddSecteurComponent);
  }

}
