import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const obs$ = from(['angular', 'angular', 'tips', 'tips', '🎓']);

    obs$
      .pipe(distinctUntilChanged()) // Comparazione di default utilizzando '==='
      .subscribe(console.log); // angular - tips - 🎓

    const newObs$ = from([
      { id: 123, name: 'John' },
      { id: 123, name: 'Greg' },
      { id: 456, name: 'Erik' },
    ]);

    newObs$
      .pipe(distinctUntilChanged((previous, current) => previous.id === current.id)) // Comparazione custom
      .subscribe(console.log); // { id: 123, name: 'John' } - { id: 456, name: 'Erik' }
  }
}
