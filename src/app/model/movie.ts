import { Feedback } from './feedback';

export class Movie {
    id: number;
    title: string;
    year: number;
    duration: number;
    owner: string;
    newowner: string;
    feedback?: Feedback;
}