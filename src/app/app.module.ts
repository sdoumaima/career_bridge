import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';


import { CarouselModule } from 'ngx-owl-carousel-o';
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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    InscritComponent,
    CandidatComponent,
    RecretureComponent,
    ClubComponent,
    PropritaireComponent,
    ProposComponent,
    CComponent,
    OffreComponent,
    EventComponent,
    CowComponent,
    ActualiteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
export class HeaderModule { }