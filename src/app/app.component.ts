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
    titulo: "14 bison came to Catalina for a movie. 100 years later, what’s next?",
    imagen: "https://i.natgeofe.com/n/92b52f4c-21f8-44c2-9fd7-9347dd5ca2c1/GettyImages-1242323713.jpg?w=2520&h=1680",
    cuerpo: "In the winter of 1924, 14 American bison weighing 1,500 pounds arrived in crates at the harbor of Santa Catalina Island, off the coast of Los Angeles, California, where they were set free to roam the hillsides.Local lore has it that they were brought here to film a movie, though there’s little evidence they made a Hollywood debut. But over the last century, the bison have become the unlikely stars of Catalinas ecosystem.",
    fecha: new Date("2024-03-16")

   
  },
  {
    titulo: "Fall in love with 10 heart-shaped places around the world",
    imagen: "https://i.natgeofe.com/n/6062013b-555f-40aa-91be-bbe1747a686f/heart-hokkaido-japan.jpg?w=2520&h=1418",
    cuerpo: "Some people leave their hearts in San Francisco, others consider Paris—the “City of Love”—as the epicenter of romance. But these heart-shaped attractions, whether naturally occurring or crafted by hand, visibly channel the affectionate Valentine’s symbol. From a flight over Heart Reef in Australia to floral arbors resembling you-know-whats in Dubai, these spots could inspire passion, platonic love, or at least some heart-worthy Instagram photos.",
    fecha: new Date("2024-03-16")

   
  }

  ]
}
