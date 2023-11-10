import { Injectable } from '@angular/core';
import { IProduto } from '../../model/IProduto.model';
import { HistoricoService } from './historico.service';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  editingIndex: number | null = null;
  produtos: IProduto[] = [
    {
      produtoNome: "Carne",
      produtoId: 1,
    },
  ];

  constructor(private historicoService: HistoricoService) {}

  adicionar(produtoRecebido: string, produtoIdRecebido: number): void {
    const novoProduto: IProduto = {
      produtoNome: produtoRecebido,
      produtoId: produtoIdRecebido,
    };
    this.produtos.push(novoProduto);
    this.historicoService.addToHistory(`Produto adicionado: ${produtoRecebido}`);
  }

  excluir(index: number): void {
    if (index >= 0 && index < this.produtos.length) {
      const produtoExcluido = this.produtos[index].produtoNome;
      this.produtos.splice(index, 1);
      this.historicoService.addToHistory(`Produto excluído: ${produtoExcluido}`);
    }
  }

  startEditing(index: number): void {
    this.editingIndex = index;
  }

  stopEditing(): void {
    this.editingIndex = null;
  }

  isEditing(index: number): boolean {
    return this.editingIndex === index;
  }

  editar(index: number, updatedProduto: IProduto): void {
    if (index >= 0 && index < this.produtos.length) {
      const produtoEditado = this.produtos[index].produtoNome;
      this.produtos[index] = updatedProduto;
      this.historicoService.addToHistory(`Produto editado: ${produtoEditado} para ${updatedProduto.produtoNome}`);
      this.stopEditing();
    }
  }
}

