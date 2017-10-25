import { Pipe, PipeTransform } from '@angular/core';
import { Feedback } from '../model/feedback';

@Pipe({
    name: 'dashboard_movie_pipe'
})
export class DashboardMoviePipe implements PipeTransform {
    transform(feedback: Feedback) {
        return '[' + feedback.feedbackType + '- "' + feedback.text + '"]';
    }
}