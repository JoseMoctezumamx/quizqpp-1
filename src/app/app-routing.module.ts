import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { QuestionarioComponent } from './components/questionario/questionario.component';
import { ResultadosComponent } from './components/resultados/resultados.component';




const routes: Routes = [
  { path: 'principal',    component: PrincipalComponent   , pathMatch: 'full'},
  { path: 'questionario', component: QuestionarioComponent, pathMatch: 'full'},
  { path: 'resultados',   component: ResultadosComponent  , pathMatch: 'full'},
  { path: '', redirectTo: 'principal', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
