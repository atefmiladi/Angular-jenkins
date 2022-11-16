import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecteurActiviteComponent } from './secteur-activite/secteur-activite.component';

const routes: Routes = [

  {path:'secteur',component:SecteurActiviteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
