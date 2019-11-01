import { PessoaStorageService } from './service/pessoaStorage.service';
import { Pessoa } from './../pessoa';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
})

export class PessoaListComponent implements OnInit {

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
