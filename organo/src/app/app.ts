import { Component, signal } from '@angular/core';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';
import { ListaLivrosComponent } from './componentes/lista-livros.component/lista-livros.component';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, ListaLivrosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
