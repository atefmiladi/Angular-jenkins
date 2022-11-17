import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SecteurActiviteService } from '../services/secteur-activite.service';

@Component({
  selector: 'app-add-secteur',
  templateUrl: './add-secteur.component.html',
  styleUrls: ['./add-secteur.component.css']
})
export class AddSecteurComponent implements OnInit {

  secteurForm !:FormGroup;

  constructor(private secteurActiviteService:SecteurActiviteService) { }

  ngOnInit(): void {

    this.secteurForm = new FormGroup({
      codeSecteurActivite: new FormControl(''),
      libelleSecteurActivite: new FormControl(''),
    });
  }

  addSecteur(){

    this.secteurActiviteService.createSecteurActivite(this.secteurForm.value).subscribe(res => console.log(res));

  }


}
