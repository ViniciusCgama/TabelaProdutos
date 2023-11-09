import { Component } from '@angular/core';
import { IProduto } from '../../model/IProduto.model';
import { CadastroService } from '../service/cadastro.component.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent{
  produtoNome!: string;
  produtoId!: number;
  listaProdutos!: IProduto[];

  constructor(private cadastroService:CadastroService) {
    this.listaProdutos = this.cadastroService.produtos;
  }

  adicionarNovoProduto(): void {
    this.cadastroService.adicionar(this.produtoNome, this.produtoId);
  }

  excluirProduto(index: number): void {
    this.cadastroService.excluir(index);
  }


}
