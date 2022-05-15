import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Email } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  public loadEmails(): Observable<Email[]> {
    return of([
      {name: 'Doudou Mohamet GAYE', time: '9:32', message: 'Hé ! Comment ça se passe ?'},
      {name: 'Antoine Ndiaye', time: '9:18', message: 'Découvrez mon nouveau tableau de bord'},
      {name: 'Aliou Fall', time: '9:15', message: 'Je veux réarranger le rendez-vous'},
      {name: 'Fatou Ndiaye', time: '9:09', message: 'Bonnes nouvelles du département des ventes'}
    ])
  }
}
