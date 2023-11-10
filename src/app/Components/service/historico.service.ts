import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  private history: string[] = [];

  addToHistory(action: string): void {
    this.history.push(action);
  }

  getHistory(): string[] {
    return this.history;
  }

  clearHistory(): void {
    this.history = [];
  }
}
