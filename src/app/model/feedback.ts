import { IUser } from '../model/user';
import { FeedbackType } from './feedback-type';

export class Feedback {
    userFrom: IUser;
    userTo: IUser;
    feedbackType: FeedbackType;
    text: string;
}