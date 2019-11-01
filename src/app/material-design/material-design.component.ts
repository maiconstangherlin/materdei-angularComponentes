import { LocalStorageService } from './service/localStorage.service';
import { Pessoa } from './models/Pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-design',
  templateUrl: './material-design.component.html',
})
export class MaterialDesignComponent implements OnInit {

  pessoa: Pessoa;
  cidades = this.getCidades();
  bairros = this.getBairros();

  constructor() { }

  ngOnInit() {
    this.pessoa = new Pessoa();
  }

  salvar(): void {
    console.log(this.pessoa);
    LocalStorageService.saveList('pessoa', this.pessoa);
  }

  getCidades(): string[] {
    return ["", "Pato Branco", "Francisco Beltrão", "Dois Vizinhos"];
  }

  getBairros(): string[] {
    return ["", "Centro", "Industrial", "Planalto"]
  }
}
