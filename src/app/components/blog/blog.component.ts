import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interfaces';
import { FormsModule } from '@angular/forms';

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
    'cuerpo': ""
  }
  ngOnInit(): void{
    this.cargarDatos();
    }

    cargarDatos(){
      let html = "";
      this.noticia.forEach(nota =>
      {
        html += `<article>
        <h3>${nota.titulo} - ${nota.cuerpo}</h3> 
        <img src=${nota.imagen} alt=${nota.titulo} />
                </article>`
      })

    return html;
    }

    guardar()
    {
      this.noticia.push(this.newNoticia);
      this.newNoticia = {
        'titulo': "",
        'imagen': "",
        'cuerpo': ""
      }
      console.log(this.noticia)

    }

}
