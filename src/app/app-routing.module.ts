import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SecteurActiviteComponent } from './secteur-activite/secteur-activite.component';

const routes: Routes = [

  {path:'secteur',component:SecteurActiviteComponent},
  {path:'product',component:ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
