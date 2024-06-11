import mongoose from 'mongoose';
import { ILinkDoc, ILinkModel } from './link.interfaces';
import { toJSON } from '../toJSON';

// Link Schema
const linkSchema = new mongoose.Schema<ILinkDoc, ILinkModel>({
  title: { type: String, required: true },
  url: { type: String, required: true },
});

// add plugin that converts mongoose to json
linkSchema.plugin(toJSON);

const Link = mongoose.model<ILinkDoc, ILinkModel>('Link', linkSchema);
export default Link;
