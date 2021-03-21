import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ANGULAR module
import { MaterializeModule } from './shared/materialize.module';


//COMPONENTES
import { PrincipalComponent } from './components/principal/principal.component';
import { QuestionarioComponent } from './components/questionario/questionario.component';
import { ResultadosComponent } from './components/resultados/resultados.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    QuestionarioComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterializeModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
