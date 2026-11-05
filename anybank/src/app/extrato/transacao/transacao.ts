import { Component, input } from '@angular/core';
import { TipoTransacao, TransacaoModel } from '../../modelos/transacao';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.html',
  styleUrl: './transacao.css',
})
export class Transacao {
  transacao = input.required<TransacaoModel>();

  isSaque(): boolean {
    return this.transacao().tipo === TipoTransacao.SAQUE;
  }
}
