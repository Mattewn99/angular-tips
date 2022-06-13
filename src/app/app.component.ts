import { Component } from '@angular/core';
import { distinctUntilChanged, distinctUntilKeyChanged, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private defaultComparison(): void {
    const obs$ = from(['angular', 'angular', 'tips', 'tips', '🎓']);

    obs$
      .pipe(distinctUntilChanged()) // Comparazione di default utilizzando '==='
      .subscribe(console.log); // angular - tips - 🎓
  }

  private objectComparison(): void {
    const obs$ = from([
      { id: 123, name: 'John' },
      { id: 123, name: 'Greg' },
      { id: 456, name: 'Erik' },
    ]);

    obs$
      .pipe(distinctUntilKeyChanged('id')) // Comparazione utilizzando la proprietà di un oggetto
      .subscribe(console.log); // { id: 123, name: 'John' } - { id: 456, name: 'Erik' }
  }

  private customComparison(): void {
    const obs$ = from(['angular', 'Angular', 'tips', 'tips', '🎓']);

    obs$
      .pipe(distinctUntilChanged((previous, current) => previous.toLowerCase() === current.toLowerCase())) // Comparazione custom
      .subscribe(console.log); // angular - tips - 🎓
  }
}
