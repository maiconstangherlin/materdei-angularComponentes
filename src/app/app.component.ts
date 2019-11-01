import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  pessoa: Pessoa = new Pessoa();

  cadastroAberto = false;
  listaAberta = true;

  novoCadastro(): void {
    this.pessoa = new Pessoa();
    this.cadastroAberto = true;
    this.listaAberta = false;
  }

  abreCadastro(pessoa: Pessoa): void {
    this.pessoa = pessoa;
    this.cadastroAberto = true;
    this.listaAberta = false;
  }

  fechaCadastro(): void {
    this.listaAberta = true;
    this.cadastroAberto = false;
  }
}
