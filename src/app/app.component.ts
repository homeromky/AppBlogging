import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { INoticia } from './interfaces/inoticia.interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  arrNoticias: INoticia[] = [
  {
    titulo: "Titulo Numero 1",
    imagen: "https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
    cuerpo: "Muchas empresas ya no acuden a un Curriculum a buscar información sobre una candidato o nuevo miembro de su empresa, sino que van a los buscadores a ver qué es lo que encuentran de él.",
    fecha: new Date("2024-03-16")

   
  },
  {
    titulo: "Titulo Numero 2",
    imagen: "https://img.freepik.com/vector-gratis/blogueando-divertido-creacion-contenido-streaming-online-videoblog-chica-joven-haciendo-selfie-red-social-compartir-comentarios-estrategia-autopromocion_335657-2386.jpg?size=626&ext=jpg",
    cuerpo: "Blogueando divertido. creación de contenido, streaming online, videoblog. chica joven haciendo selfie",
    fecha: new Date("2024-03-16")

   
  }

  ]
}
