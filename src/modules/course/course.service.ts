import mongoose from 'mongoose';
import httpStatus from 'http-status';
import { ICourse, ICourseDoc } from './course.interfaces';
import Course from './course.model';
import { ApiError } from '../errors';

/**
 * Get course by id
 * @param {mongoose.Types.ObjectId} id
 * @returns {Promise<ICourseDoc | null>}
 */
export const getCourseById = async (id: mongoose.Types.ObjectId): Promise<ICourseDoc | null> => Course.findById(id);

/**
 * Create a course
 * @param {ICourse} courseBody
 * @returns {Promise<ICourseDoc>}
 */
export const createCourse = async (courseBody: ICourse): Promise<ICourseDoc> => {
  return Course.create(courseBody);
};

/**
 * Update course by id
 * @param {mongoose.Types.ObjectId} courseId
 * @param {UpdateUserBody} updateBody
 * @returns {Promise<IUserDoc | null>}
 */
export const updateCourseById = async (
  courseId: mongoose.Types.ObjectId,
  updateBody: ICourse
): Promise<ICourseDoc | null> => {
  const course = await getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  Object.assign(course, updateBody);
  await course.save();
  return course;
};
