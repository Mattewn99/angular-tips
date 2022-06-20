import { Component } from '@angular/core';
import { Storage } from './storage.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * È inizializzato con il valore presente nello storage che ha come chiave 'index',
   * se non è presente viene impostato il valore di default (Secondo parametro)
   * A ogni aggiornamento della proprietà viene aggiornato anche lo storage 🚀
  */
  @Storage('index', 0)
  index!: number;

  handleUpdate() {
    this.index++; // Aggiornerà anche la proprietà 'index' nello storage!
  }
}
