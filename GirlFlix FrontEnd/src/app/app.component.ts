import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from './models/pelicula.model';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [
      CommonModule,
      NavbarComponent,
      FooterComponent,
      RouterModule
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

  
export class AppComponent {

constructor(public router: Router) {}

  // Método para verificar si estamos en login
  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }

  peliculas: Pelicula[] = [
    {
        id: 1,
        titulo: "Taylor Swift: The Eras Tour",
        imagen: "assets/images/taylor.jpg",
        descripcion: "Un viaje a través de la carrera de Taylor Swift, desde sus inicios hasta su éxito actual.",
    },
    {
        id: 2,
        titulo: "Blanca Nieves",
        imagen: "assets/images/blancaNieves.jpeg",
        descripcion: "La historia de Blanca Nieves, una princesa que se enfrenta a la malvada reina.",
    },
    {
        id: 3,
        titulo: "The Summer I Turned Pretty",
        imagen: "assets/images/theSummer.png",
        descripcion: "Una serie de amor adolescente de una chica que pasa sus veranos en una casa de playa.",
    },
    {
        id: 5,
        titulo: "To All The Boys I've Loved Before",
        imagen: "assets/images/toAllBoys.jpg",
        descripcion: "Una comedia romántica sobre una chica cuyas cartas de amor secretas son enviadas.",
    },
    {
        id: 4,
        titulo: "Aladin",
        imagen: "assets/images/aladin.jpg",
        descripcion: "La historia de un joven que encuentra una lámpara mágica y se convierte en príncipe.",
    },
    {
        id: 6,
        titulo: "Anyone But You",
        imagen: "assets/images/anyoneButYou.jpeg",
        descripcion: "Una comedia romántica que sigue a dos personas que se odian pero están destinadas a estar juntas.",
    },
    {
        id: 7,
        titulo: "Love Alarm",
        imagen: "assets/images/loveAlarm.webp",
        descripcion: "Una serie que explora el amor y la tecnología a través de una aplicación.",
    },
    {
        id: 8,
        titulo: "La Sirenita",
        imagen: "assets/images/lasirenita.jpg",
        descripcion: "La historia de Ariel, una sirena que sueña con convertirse en humana.",
    },
    {
        id: 9,
        titulo: "Encantada",
        imagen: "assets/images/encantada.jpg",
        descripcion: "Una princesa de un mundo de cuentos de hadas es transportada a la ciudad de Nueva York.",
    },
    {
        id: 10,
        titulo: "Enredados",
        imagen: "assets/images/enredados.jpg",
        descripcion: "La historia de Rapunzel, una joven con un cabello mágico que anhela la libertad.",
    },
    {
        id: 11,
        titulo: "Alguien Como Él",
        imagen: "assets/images/alguienComoEl.webp",
        descripcion: "Una historia de amor entre dos personas que parecen ser opuestos.",
    },
    {
        id: 12,
        titulo: "Something In The Rain",
        imagen: "assets/images/something.jpg",
        descripcion: "Una serie que sigue la historia de amor entre una mujer mayor y un hombre más joven.",
    }

];

}
