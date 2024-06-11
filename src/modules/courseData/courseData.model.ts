import mongoose from 'mongoose';
import { ICourseDataDoc, ICourseDataModel } from './courseData.interfaces';
import { toJSON } from '../toJSON';

// Course Data Schema
const courseDataSchema = new mongoose.Schema<ICourseDataDoc, ICourseDataModel>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
    videoThumbnail: { type: Object, required: true },
    videoSection: { type: String, required: true },
    videoLength: { type: Number, required: true },
    videoPlayer: { type: String, required: true },
    links: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Link' }],
    suggestion: { type: String, required: true },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
courseDataSchema.plugin(toJSON);

const CourseData = mongoose.model<ICourseDataDoc, ICourseDataModel>('CourseData', courseDataSchema);
export default CourseData;
