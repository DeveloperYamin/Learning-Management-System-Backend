import { Document, Model } from 'mongoose';
import { IUserDoc } from '../user/user.interfaces';

// Comment Interface
export interface IComment {
  user: IUserDoc['_id'];
  question: string;
  questionReplies: ICommentDoc['_id'][];
}

export interface ICommentDoc extends IComment, Document {}
export interface ICommentModal extends Model<ICommentDoc> {}
