import { Request, Response } from 'express';
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import { catchAsync } from '../utils';
import * as courseService from './course.service';

export const createCourse = catchAsync(async (req: Request, res: Response) => {
  const user = await courseService.createCourse(req.body);
  res.status(httpStatus.CREATED).send(user);
});

export const updateCourse = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['courseId'] === 'string') {
    const user = await courseService.updateCourseById(new mongoose.Types.ObjectId(req.params['userId']), req.body);
    res.send(user);
  }
});
