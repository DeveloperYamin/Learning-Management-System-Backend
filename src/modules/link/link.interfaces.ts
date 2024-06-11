import { Document, Model } from 'mongoose';

// Link Interface
export interface ILink {
  title: string;
  url: string;
}

export interface ILinkDoc extends ILink, Document {}
export interface ILinkModel extends Model<ILinkDoc> {}
