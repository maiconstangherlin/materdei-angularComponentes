import { Pessoa } from '../material-design/models/pessoa';
import { PessoaStorageService } from '../material-design/service/pessoaStorage.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {

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
