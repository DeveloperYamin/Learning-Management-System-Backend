import express, { Router } from 'express';
import { courseController, courseValidation } from '../../modules/course';
import { validate } from '../../modules/validate';

const router: Router = express.Router();

router.route('/').post(validate(courseValidation.createCourse), courseController.createCourse);

router.route('/:courseId').patch(courseController.updateCourse);

export default router;
