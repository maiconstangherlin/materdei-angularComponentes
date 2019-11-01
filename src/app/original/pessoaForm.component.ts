import { PessoaStorageService } from './../material-design/service/pessoaStorage.service';
import { Pessoa } from '../material-design/models/Pessoa';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'original-pessoa-form',
  templateUrl: './pessoaForm.component.html',
})
export class PessoaFormOriginalComponent {

  cidades = this.getCidades();
  bairros = this.getBairros();

  @Input() pessoa: Pessoa;
  @Output() close = new EventEmitter<void>();

  cancelar(): void {
    this.close.emit();
  }

  salvar(): void {
    PessoaStorageService.saveList(this.pessoa);
    this.close.emit();
  }

  getCidades(): string[] {
    return ["", "Pato Branco", "Francisco Beltrão", "Dois Vizinhos"];
  }

  getBairros(): string[] {
    return ["", "Centro", "Industrial", "Planalto"]
  }

}
