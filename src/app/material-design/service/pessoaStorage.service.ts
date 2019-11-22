import { Pessoa } from '../models/pessoa';

export class PessoaStorageService {

    private static CHAVE_PESSOA: string = "PESSOA_LIST";

    static saveStatico(valor: any): void {
        localStorage.setItem(this.CHAVE_PESSOA, JSON.stringify(valor));
    }

    static saveList(valor: any): void {
        const objeto = localStorage.getItem(this.CHAVE_PESSOA);

        if (!objeto) {
            localStorage.setItem(this.CHAVE_PESSOA, JSON.stringify([valor]));
        } else {
            let objetoParse: Pessoa[] = JSON.parse(objeto);
            objetoParse.push(valor);
            localStorage.setItem(this.CHAVE_PESSOA, JSON.stringify(objetoParse));
        }
    }

    static getList(): Pessoa[] {
        const lista = localStorage.getItem(this.CHAVE_PESSOA);

        if (lista) {
            return JSON.parse(lista);
        }
        return;
    }
}