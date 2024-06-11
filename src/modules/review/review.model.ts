import mongoose from 'mongoose';
import { IReviewDoc, IReviewModal } from './review.interfaces';
import { toJSON } from '../toJSON';

// Review Schema
const reviewSchema = new mongoose.Schema<IReviewDoc, IReviewModal>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: {
      type: Number,
      default: 0,
    },
    comment: { type: String, required: true },
    commentReplies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
reviewSchema.plugin(toJSON);

const Review = mongoose.model<IReviewDoc, IReviewModal>('Review', reviewSchema);
export default Review;
