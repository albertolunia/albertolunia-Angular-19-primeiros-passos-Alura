import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css',
})
export class ListaLivrosComponent implements OnInit {
  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

  ngOnInit(): void {
    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
      const generoId = livro.genero.id;
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(livro);
    });

    this.generos = [
      {
        id: "romance",
        nome: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
      },
      {
        id: "misterio",
        nome: "Mistério",
        livros: this.livrosPorGenero.get("misterio") ?? []
      },
      {
        id: "fantasia",
        nome: "Fantasia",
        livros: this.livrosPorGenero.get("fantasia") ?? []
      },
      {
        id: "ficcao-cientifica",
        nome: "Ficção Científica",
        livros: this.livrosPorGenero.get("ficcao-cientifica") ?? []
      },
      {
        id: "tecnicos",
        nome: "Técnicos",
        livros: this.livrosPorGenero.get("tecnicos") ?? []
      },
      {
        id: "suspense",
        nome: "Suspense",
        livros: this.livrosPorGenero.get("suspense") ?? []
      },
      {
        id: "terror",
        nome: "Terror",
        livros: this.livrosPorGenero.get("terror") ?? []
      }
    ];

    console.log(this.livrosPorGenero);
  }
}
