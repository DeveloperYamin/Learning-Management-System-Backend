import mongoose, { ObjectId } from 'mongoose';

export interface ICourse {
  name: string;
  description: string;
  categories: string;
  price: number;
  estimatedPrice?: number;
  tags: string;
  level: string;
  demoUrl: string;
  benefits: string[];
  prerequisites: string[];
  reviews?: ObjectId[];
  courseData?: ObjectId[];
  ratings?: number;
  purchased?: number;
}

export interface ICourseDoc extends ICourse, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

export interface ICourseModel extends mongoose.Model<ICourseDoc> {}
