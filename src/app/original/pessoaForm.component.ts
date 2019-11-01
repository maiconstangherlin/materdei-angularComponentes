import { Pessoa } from '../material-design/models/Pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pessoa-form',
  templateUrl: './pessoaForm.component.html',
  styleUrls: ['./pessoaForm.component.scss'],
})
export class PessoaFormComponent implements OnInit {

  pessoa: Pessoa;
  cidades = this.getCidades();
  bairros = this.getBairros();

  constructor() { }

  ngOnInit() {
    this.pessoa = new Pessoa();
  }

  salvar(): void {
    console.log(this.pessoa);
  }

  getCidades(): string[] {
    return ["", "Pato Branco", "Francisco Beltrão", "Dois Vizinhos"];
  }

  getBairros(): string[] {
    return ["", "Centro", "Industrial", "Planalto"]
  }
}
