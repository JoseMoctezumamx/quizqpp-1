import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//FORMULARIOS REACTIVOS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ANGULAR module
import { MaterializeModule } from './shared/materialize.module';

//PETICIONES HTTP
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//COMPONENTES
import { PrincipalComponent } from './components/principal/principal.component';
import { QuestionarioComponent } from './components/questionario/questionario.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { LoginComponent } from './components/login/login.component';
import { UserDatailsComponent } from './components/userDatails/userDatails.component';
import { AddUserComponent } from './components/addUser/addUser.component';

//LATEX
import { KatexModule } from 'ng-katex';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    QuestionarioComponent,
    ResultadosComponent,
    LoginComponent,
    UserDatailsComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterializeModule,
    KatexModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
