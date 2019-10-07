import { Pessoa } from './pessoa';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent { 

  listaPessoa: Pessoa[] = [];
  nome: string;
  sobrenome: string;

  cliquei() : void {
    let pessoa = new Pessoa();
    pessoa.nome = this.nome;
    pessoa.sobrenome = this.sobrenome;
    
    this.listaPessoa.push(pessoa);
  }
}
