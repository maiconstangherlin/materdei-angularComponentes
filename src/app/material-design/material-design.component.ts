import { PessoaStorageService } from './service/pessoaStorage.service';
import { Pessoa } from './models/Pessoa';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-design',
  templateUrl: './material-design.component.html',
})
export class MaterialDesignComponent {  

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
