import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { CandidatComponent } from './candidat/candidat.component';
import { RecretureComponent } from './recreture/recreture.component';
import { ClubComponent } from './club/club.component';
import { PropritaireComponent } from './propritaire/propritaire.component';
import { ProposComponent } from './propos/propos.component';
import { CComponent } from './c/c.component';
import { OffreComponent } from './offre/offre.component';
import { EventComponent } from './event/event.component';
import { CowComponent } from './cow/cow.component';
import { ActualiteComponent } from './actualite/actualite.component';

const routes: Routes = [
  {path :"home",component:HomeComponent},
  {path :"login",component:LoginComponent},
  {path :"inscrit",component:InscritComponent},
  {path :"candidat",component:CandidatComponent},
  {path :"recreture",component:RecretureComponent},
  {path :"club",component:ClubComponent},
  {path :"propritaire",component:PropritaireComponent},
  {path :"propos",component:ProposComponent},
  {path :"c",component:CComponent},
  {path :"offre",component:OffreComponent},
  {path :"event",component:EventComponent},
  {path :"cow",component:CowComponent},
  {path :"actualite",component:ActualiteComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {  }
