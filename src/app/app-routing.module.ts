import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    data: { title: 'Container' },
    children: [
      { path: 'page-one', component: PageOneComponent, data: { title: 'Page one' } },
      { path: 'page-two', component: PageTwoComponent, data: { title: 'Page two' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
