// tslint:disable: max-line-length
import { Communication } from '../../../blue-utils/blue-object/messaging/Communication';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  communications: Communication[] = [
    {type: 'info', title: 'Aggiunte nuove funzionalità a STOT', subtitle: 'Funzionalità aggiunte a STOT', text: 'Sono state aggiunte alcune funzioni al pannello profilatore. Consulta la guida per tutti i dettagli.'},
    {type: 'update', title: 'Informazioni sul prodotto', subtitle: 'Funzionalità aggiunte a STOT', text: 'Sono state aggiunte alcune funzioni al pannello profilatore. Consulta la guida per tutti i dettagli.'},
    {type: 'warning', title: 'Possibili rallentamenti di sistema', subtitle: 'Il sistema potrebbe subire dei rallentamenti', text: 'Si comunica che, a causa di alcuni interventi ai server, l \'applicazione potrebbe subire dei rallentamenti'},
    {type: 'news', title: 'Novità sulle fototessere di STOT', subtitle: 'Funzionalità aggiunte a STOT', text: 'Sono state aggiunte alcune funzioni al pannello profilatore. Consulta la guida per tutti i dettagli.'},
    {type: 'info', title: 'Informazioni sui servizi di STOT', subtitle: 'Funzionalità aggiunte a STOT', text: 'Sono state aggiunte alcune funzioni al pannello profilatore. Consulta la guida per tutti i dettagli.'},
    {type: 'update', title: 'Aggiornamento di sistema terminato', subtitle: 'Il prodotto è stato aggiornato alla versione finale Alice-4', text: 'L\'aggiornamento di sistema è stato portato a termine. Consulta la guida per avere maggiori dettagli.'},
    {type: 'update', title: 'Aggiornamento di sistema programmato', subtitle: 'Aggiornamento alla versione finale Alice-4', text: 'Si comunica che il giorno 10 ottobre 2020 il servizio non sarà disponibile per un aggiornamento programmato.'}
  ];

  constructor() { }

  getCommunications(): Communication[] {
    return this.communications;
  }
}
