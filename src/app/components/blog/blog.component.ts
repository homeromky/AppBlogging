import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interfaces';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Data } from '@angular/router';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() noticia: INoticia[] = [];

 
  newNoticia: any = {
    'titulo': "",
    'imagen': "",
    'cuerpo': "",
    'fecha':  new Date()
  }
  ngOnInit(): void{
    this.cargarDatos();
    }

    cargarDatos(){
      let html = "";
   
     
      this.noticia.forEach(nota =>
      {
        html += `<article>
        <div>
       
        <h2>${nota.titulo}</h2> 
        <h3>${nota.cuerpo}</h3> 
        </div>
        <div>
        <img src=${nota.imagen} alt=${nota.titulo} />
        </div>
        <div>
        <span><b>Publicado:</b> ${nota.fecha}</span>
        </div>
                </article>`
      })

   

    return html;
    }

    guardar()
    {
      if(this.newNoticia.titulo !== "" && this.newNoticia.imagen !== "" && this.newNoticia.cuerpo !== ""){
      this.noticia.push(this.newNoticia);
      this.newNoticia = {
        'titulo': "",
        'imagen': "",
        'cuerpo': "",
        'fecha': ""
      }
      }
      else{
        Swal.fire({
          title: 'Error!',
          text: 'No puede dejar los campos en blanco',
          icon: 'error',
          confirmButtonText: 'Entendido'
        })
      }
      
   

    }

}
