import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-tarjeta-pelicula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-pelicula.component.html',
  styleUrls: ['./tarjeta-pelicula.component.css']
})
export class TarjetaPeliculaComponent {
  @Input() pelicula: any = {};
  esFavorito = false;
  leGusta = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
      this.esFavorito = favoritos.some((p: any) => p.id === this.pelicula.id);

      const likes = JSON.parse(localStorage.getItem('likes') || '[]');
      this.leGusta = likes.includes(this.pelicula.id);
    }
  }

  toggleFavorito(): void {
    if (isPlatformBrowser(this.platformId)) {
      let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');

      if (this.esFavorito) {
        favoritos = favoritos.filter((p: any) => p.id !== this.pelicula.id);
      } else {
        favoritos.push(this.pelicula);
      }

      localStorage.setItem('favoritos', JSON.stringify(favoritos));
      this.esFavorito = !this.esFavorito;
    }
  }

  toggleLike(): void {
    if (isPlatformBrowser(this.platformId)) {
      let likes = JSON.parse(localStorage.getItem('likes') || '[]');

      if (this.leGusta) {
        likes = likes.filter((id: number) => id !== this.pelicula.id);
      } else {
        likes.push(this.pelicula.id);
      }

      localStorage.setItem('likes', JSON.stringify(likes));
      this.leGusta = !this.leGusta;
    }
  }
}
