import { Injectable } from '@angular/core';
import { Baralho } from './baralho';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaralhoService {

  constructor() { }

  getBaralhos(): Observable<Baralho[]>{
    return of([
    {
      title: 'Direito',
      pending: true,
      total: 50
    },
    {
      title: 'Estatística',
      pending: false,
      total: 21
    },
    {
      title: 'Direito Administrativo',
      pending: false,
      total: 250
    },
    {
      title: 'Português',
      pending: true,
      total: 37
    },
    {
      title: 'Artes',
      pending: false,
      total: 3
    }
  ]);
  }
}
