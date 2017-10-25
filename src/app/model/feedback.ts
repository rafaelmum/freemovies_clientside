import { IUser } from '../user/user';
import { FeedbackType } from './feedback-type';

export class Feedback {
    userFrom: IUser;
    userTo: IUser;
    feedbackType: FeedbackType;
    text: string;
}