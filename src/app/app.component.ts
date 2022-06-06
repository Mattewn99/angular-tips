import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly router: Router, private readonly titleService: Title) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.titleService.setTitle(`${this.getRouteTitles().join(' | ')} ~ Angular Tips 🎓`);
    });
  }

  private getRouteTitles(): string[] {
    let currentRoute = this.router.routerState.root.firstChild;
    const titles: string[] = [];

    while (currentRoute) {
      const title = currentRoute.snapshot.routeConfig?.data?.['title'];

      title && titles.push(title);

      currentRoute = currentRoute.firstChild;
    }

    return titles;
  }
}
