import { Component } from '@angular/core';
import { CadastroService } from '../service/cadastro.component.service';
import { IProduto } from '../../model/IProduto.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent{
  produtoNome!: string;
  produtoId!: number;
  listaProdutos!: IProduto[];

  constructor(private cadastroService:CadastroService) {
    this.listaProdutos = this.cadastroService.produtos;
  }

  adicionarNovoProduto(): void {
    this.cadastroService.adicionar(this.produtoNome, this.produtoId);
  }
}
