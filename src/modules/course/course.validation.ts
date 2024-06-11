import Joi from 'joi';
import { ICourse } from './course.interfaces';
import { objectId } from '../validate';

// Define the file schema
// const fileSchema = Joi.object({
//   fieldname: Joi.string().required(),
//   originalname: Joi.string().required(),
//   encoding: Joi.string().required(),
//   mimetype: Joi.string().required(),
//   buffer: Joi.binary().required(),
//   size: Joi.number(),
// });

// const createCourseBody: Record<keyof ICourse, any> = {
//   name: Joi.string().required(),
//   description: Joi.string().required(),
//   categories: Joi.string().required(),
//   price: Joi.number().required(),
//   estimatedPrice: Joi.number(),
//   thumbnails: Joi.array().items(fileSchema).min(1).required(),
//   tags: Joi.string().required(),
//   level: Joi.string().required(),
//   demoUrl: Joi.string().required(),
//   benefits: Joi.array().items(Joi.string()).required(),
//   prerequisites: Joi.array().items(Joi.string()).required(),
//   reviews: Joi.array().items(Joi.string().custom(objectId)),
//   courseData: Joi.array().items(Joi.string().custom(objectId)),
//   ratings: Joi.number(),
//   purchased: Joi.number(),
// };

const createCourseBody: Record<keyof ICourse, any> = {
  name: Joi.string().required(),
  description: Joi.string().required(),
  categories: Joi.string().required(),
  price: Joi.number().required(),
  estimatedPrice: Joi.number(),
  tags: Joi.string().required(),
  level: Joi.string().required(),
  demoUrl: Joi.string().required(),
  benefits: Joi.any().required(),
  prerequisites: Joi.any().required(),
  reviews: Joi.array().items(Joi.string().custom(objectId)),
  courseData: Joi.array().items(Joi.string().custom(objectId)),
  ratings: Joi.number(),
  purchased: Joi.number(),
};

export const createCourse = {
  body: Joi.object().keys(createCourseBody),
};

export const getCourses = {
  query: Joi.object().keys({
    name: Joi.string(),
    categories: Joi.string(),
    tags: Joi.string(),
    level: Joi.string(),
    sortBy: Joi.string(),
    projectBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId).required(),
  }),
};

export const updateCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      description: Joi.string(),
      categories: Joi.string(),
      price: Joi.number(),
      estimatedPrice: Joi.number(),
      tags: Joi.string(),
      level: Joi.string(),
      demoUrl: Joi.string(),
      benefits: Joi.array().items(Joi.string()),
      prerequisites: Joi.array().items(Joi.string()),
    })
    .min(1),
};

export const deleteCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId).required(),
  }),
};
