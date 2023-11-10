// lista.component.ts
import { Component } from '@angular/core';
import { IProduto } from '../../model/IProduto.model';
import { CadastroService } from '../service/cadastro.component.service';
import { HistoricoService } from '../service/historico.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  produtoNome!: string;
  produtoId!: number;
  listaProdutos!: IProduto[];
  editIndex: number | null = null;

  constructor(public cadastroService: CadastroService,  private historicoService: HistoricoService
    ) {
    this.listaProdutos = this.cadastroService.produtos;
  }

  adicionarNovoProduto(): void {
    this.cadastroService.adicionar(this.produtoNome, this.produtoId);
    this.listaProdutos = this.cadastroService.produtos;
  }

  excluirProduto(index: number): void {
    this.cadastroService.excluir(index);
    this.listaProdutos = this.cadastroService.produtos;
  }

  editar(index: number, produto: IProduto): void {
    if (this.cadastroService.isEditing(index)) {
      this.cadastroService.editar(index, produto);
    } else {
      this.cadastroService.startEditing(index);
    }
  }

  salvarEdicao(index: number): void {
    this.cadastroService.stopEditing();
  }

  getHistory(): string[] {
    return this.historicoService.getHistory();
  }

  clearHistory(): void {
    this.historicoService.clearHistory();
  }
}
