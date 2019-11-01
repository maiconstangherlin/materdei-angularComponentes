import { PessoaStorageService } from './../material-design/service/pessoaStorage.service';
import { Pessoa } from './../pessoa';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'original-pessoa-list',
  templateUrl: './pessoaList.component.html',
})

export class PessoaListOriginalComponent implements OnInit {

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
