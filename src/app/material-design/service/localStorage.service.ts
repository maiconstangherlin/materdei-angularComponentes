import { Pessoa } from './../../pessoa';

export class LocalStorageService {

    static save(chave: string, valor: any) {
        localStorage.setItem(chave, JSON.stringify(valor));
    }

    static saveList(chaveLista: string, valor: any) {
        const objeto = localStorage.getItem(chaveLista);

        if (!objeto) {
            localStorage.setItem(chaveLista, JSON.stringify([valor]));
        } else {
            let objetoParse: Pessoa[] = JSON.parse(objeto);
            objetoParse.push(valor);
            localStorage.setItem(chaveLista, JSON.stringify(objetoParse));
        }
    }

}