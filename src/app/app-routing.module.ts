import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DicasComponent } from './pages/dicas/dicas.component';
import { DocesComponent } from './pages/doces/doces.component';
import { HomeComponent } from './pages/home/home.component';
import { SalgadasComponent } from './pages/salgadas/salgadas.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'salgadas',
    component: SalgadasComponent,
  },
  {
    path: 'doces',
    component: DocesComponent,
  },
  {
    path: 'dicas',
    component: DicasComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
