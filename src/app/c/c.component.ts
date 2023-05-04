import { Component } from '@angular/core';




export class AppModule { }

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent {
  exp: any = [];
  formation: any = [];
  langue: any = [];
  university: any = [];


  addlangue() {
    this.langue.push(
      {
        langue: "",
        niveau: ""
      }
    )
  }

  addexp(){
    this.exp.push(
      {
        entreprise: "",
        city: "",
        fonction:"",
        debutmois: "",
        debutannee: "",
        finmois: "",
        finannee: "",
        details: ""
      }
    )
  }

  adduniversity(){
    this.university.push(
      {
        fac: "",
        diploma: "",
        debutmois: "",
        debutannee: "",

      }
    )
  }

  addformation(){
    this.formation.push(
      {
        centre: "",
        diploma: "",
        debutmois: "",
        debutannee: "",

      }
    )
  }




  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    // Vous pouvez envoyer la vidéo au serveur à partir d'ici
  }


  isToggled = false;

  toggleButton() {
    this.isToggled = !this.isToggled;
  }

}