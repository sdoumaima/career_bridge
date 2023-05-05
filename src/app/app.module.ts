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
import { DetailcowComponent } from './detailcow/detailcow.component';
import { DetailoffreComponent } from './detailoffre/detailoffre.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RComponent } from './r/r.component';
import { ActualiteRComponent } from './actualite-r/actualite-r.component';
import { OffreRComponent } from './offre-r/offre-r.component';
import { EventRComponent } from './event-r/event-r.component';
import { CoworkingRComponent } from './coworking-r/coworking-r.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationRComponent } from './notification-r/notification-r.component';
import { DetailcoworkingRComponent } from './detailcoworking-r/detailcoworking-r.component';
import { FormsModule } from '@angular/forms';
import { CandidaturesCComponent } from './candidatures-c/candidatures-c.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';




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
    ActualiteComponent,
  
    DetailcowComponent,
       DetailoffreComponent,
       ReservationComponent,
       RComponent,
       ActualiteRComponent,
       OffreRComponent,
       EventRComponent,
       CoworkingRComponent,
       NotificationComponent,
       NotificationRComponent,
       DetailcoworkingRComponent,
       CandidaturesCComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
export class HeaderModule { }