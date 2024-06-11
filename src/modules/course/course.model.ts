import mongoose from 'mongoose';
import { ICourseDoc, ICourseModel } from './course.interfaces';
import { toJSON } from '../toJSON';

const courseSchema = new mongoose.Schema<ICourseDoc, ICourseModel>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    estimatedPrice: {
      type: Number,
    },
    thumbnails: [{ type: String, required: true }],
    tags: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    demoUrl: {
      type: String,
      required: true,
    },
    benefits: [{ type: String, required: true }],
    prerequisites: [{ type: String, required: true }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    courseData: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CourseData' }],
    ratings: {
      type: Number,
      default: 0,
    },
    purchased: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
courseSchema.plugin(toJSON);

const Course = mongoose.model<ICourseDoc, ICourseModel>('Course', courseSchema);

export default Course;
