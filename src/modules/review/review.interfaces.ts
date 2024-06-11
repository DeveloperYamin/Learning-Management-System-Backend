import { Document, Model } from 'mongoose';
import { IUserDoc } from '../user/user.interfaces';

// Review Interface
export interface IReview {
  user: IUserDoc['_id'];
  rating?: number;
  comment: string;
  commentReplies?: IReviewDoc['_id'][];
}

export interface IReviewDoc extends IReview, Document {}
export interface IReviewModal extends Model<IReviewDoc> {}
