import { Opcion } from './Opcion';

export interface QuizPreguntas {
    questionId:     number;
    questionText:   string;
    options:        Opcion[];
    answer:         string;
    explanation:    string;
    selectedOption: string;
}