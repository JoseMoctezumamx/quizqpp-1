import { Component, OnInit } from '@angular/core';
import { QuizPreguntas } from '../../model/QuizPreguntas';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  allQuestions: QuizPreguntas[] = [
    {
      questionId:1,
      questionText: '¿Cuál es el sinonimo de DELEGACION?',
      options:[
        { optionValue: '1', optionText: 'Retención' },
        { optionValue: '2', optionText: 'Cuidado' },
        { optionValue: '3', optionText: 'Acusación' },
        { optionValue: '4', optionText: 'Discreción' },
        { optionValue: '5', optionText: 'Omisión' }
      ],
      answer: '1',
      explanation: 'a service gets passed to the client during DI',
      selectedOption: '3'
    },
    {
      questionId: 2,
      questionText: 'Which of the following benefit from dependency injection?',
      options: [
        { optionValue: '1', optionText: 'Programming' },
        { optionValue: '2', optionText: 'Testability' },
        { optionValue: '3', optionText: 'Software design' },
        { optionValue: '4', optionText: 'All of the above.' },
      ],
      answer: '4',
      explanation: 'DI simplifies both programming and testing as well as being a popular design pattern',
      selectedOption: ''
    },
    {
      questionId: 3,
      questionText: 'Which of the following is the first step in setting up dependency injection?',
      options: [
        { optionValue: '1', optionText: 'Require in the component.' },
        { optionValue: '2', optionText: 'Provide in the module.' },
        { optionValue: '3', optionText: 'Mark dependency as @Injectable().' },
        { optionValue: '4', optionText: 'Declare an object.' }
      ],
      answer: '3',
      explanation: 'the first step is marking the class as @Injectable()',
      selectedOption: ''
    },
    {
      questionId: 4,
      questionText: 'In which of the following does dependency injection occur?',
      options: [
        { optionValue: '1', optionText: '@Injectable()' },
        { optionValue: '2', optionText: 'constructor' },
        { optionValue: '3', optionText: 'function' },
        { optionValue: '4', optionText: 'NgModule' },
      ],
      answer: '2',
      explanation: 'object instantiations are taken care of by the constructor in Angular',
      selectedOption: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
