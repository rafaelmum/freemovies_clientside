import { Feedback } from './feedback';

export class Movie {
    id: number;
    title: String;
    year: number;
    duration: number;
    owner: String;
    feedback?: Feedback;
}