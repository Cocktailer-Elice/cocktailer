import { Schema, model } from 'mongoose';
import { IComment } from '../types';

const CommentSchema: Schema = new Schema(
  {
    owner: {
      type: Number,
      required: true,
    },
    cockflowId: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isAdopted: {
      type: Boolean,
    },
    isSubComment: {
      type: Boolean,
    },
    parentCommentId: {
      type: String,
    },
  },
  { collection: 'comments', timestamps: true, versionKey: false },
);

export default model<IComment>('comments', CommentSchema);
