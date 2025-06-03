import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TarjetaPeliculaComponent } from '../tarjeta-pelicula/tarjeta-pelicula.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, TarjetaPeliculaComponent],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    }
  }
}


  // agregarAFavoritos(pelicula: Pelicula) {
  //   // Si la película ya está en favoritos, no la agregamos
  //   if (!this.peliculasFavoritas.find(p => p.id === pelicula.id)) {
  //     this.peliculasFavoritas.push(pelicula);
  //   }
  // }

  // eliminarDeFavoritos(pelicula: Pelicula) {
  //   const index = this.peliculasFavoritas.findIndex(p => p.id === pelicula.id);
  //   if (index !== -1) {
  //     this.peliculasFavoritas.splice(index, 1);
  //   }
  // }

