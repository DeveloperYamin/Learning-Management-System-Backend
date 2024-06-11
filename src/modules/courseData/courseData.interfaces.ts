import { Document, Model } from 'mongoose';
import { ICommentDoc } from '../comment/comment.interfaces';
import { ILinkDoc } from '../link/link.interfaces';

// Course Data Interface
export interface ICourseData {
  title: string;
  description: string;
  videoUrl: string;
  videoThumbnail: object;
  videoSection: string;
  videoLength: number;
  videoPlayer: string;
  links: ILinkDoc['_id'][];
  suggestion: string;
  questions: ICommentDoc['_id'][];
}

export interface ICourseDataDoc extends ICourseData, Document {}
export interface ICourseDataModel extends Model<ICourseDataDoc> {}
