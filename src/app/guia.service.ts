import { Injectable } from '@angular/core';
import { Guia } from '../app/guiam';
import { GUIAS } from '../app/mock-guias';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GuiaService {

  constructor(private messageService: MessageService) { }
  getGuias(): Observable <Guia[]> {
    this.messageService.add('GuiaService: fetched guias');
    return of (GUIAS);
  }
  /*getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }*/
  }

