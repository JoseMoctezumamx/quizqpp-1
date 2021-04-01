import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable({
    providedIn: 'root'
})

export class QuestionarioService {

    constructor(protected http:HttpClient){}

    getQuizQuestion():Observable<any>{
        return this.http.get(environment.urlmodules.API + 'questions');
    }
}