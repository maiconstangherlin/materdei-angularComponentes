import { Pessoa } from '../material-design/models/pessoa';
import { PessoaStorageService } from '../material-design/service/pessoaStorage.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})

export class ListaComponent implements OnInit {

  pessoaList: Pessoa[];

  @Output() editarCadastro = new EventEmitter<Pessoa>();
  @Output() novoCadastro = new EventEmitter<void>();

  ngOnInit(): void {
    this.pessoaList = PessoaStorageService.getList();
  }

  editar(pessoa: Pessoa): void {
    this.editarCadastro.emit(pessoa);
  }

  novo(): void {
    this.novoCadastro.emit();
  }

}
