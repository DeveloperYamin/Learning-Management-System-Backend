import mongoose from 'mongoose';
import { ICommentDoc, ICommentModal } from './comment.interfaces';
import { toJSON } from '../toJSON';

// Comment Schema
const commentSchema = new mongoose.Schema<ICommentDoc, ICommentModal>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    question: { type: String, required: true },
    questionReplies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);

const Comment = mongoose.model<ICommentDoc, ICommentModal>('Comment', commentSchema);
export default Comment;
