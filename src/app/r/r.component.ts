import { Component } from '@angular/core';

@Component({
  selector: 'app-r',
  templateUrl: './r.component.html',
  styleUrls: ['./r.component.css']
})
export class RComponent {


  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    // Vous pouvez envoyer la vidéo au serveur à partir d'ici
  }
}
