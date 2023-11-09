import { Injectable } from '@angular/core';
import { IProduto } from '../../model/IProduto.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  produtos:IProduto[] = [{
   produtoNome: "Carne",
   produtoId: 1
}]
  adicionar(produtoRecebido: string, produtoIdRecebido: number):void {
    const novoProduto:IProduto = {
    produtoNome : produtoRecebido,
    produtoId:produtoIdRecebido
    }
    this.produtos.push(novoProduto);{

    }
  }

  excluir(index: number): void {
    if (index >= 0 && index < this.produtos.length) {
      this.produtos.splice(index, 1);
    }
  }
  }

