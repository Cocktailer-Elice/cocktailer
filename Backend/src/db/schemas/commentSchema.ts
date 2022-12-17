import { Schema, model } from 'mongoose';
import { IComment } from '../types';

const CommentSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    subcomments: [
      {
        type: String,
      },
    ],
    isSubcomment: {
      type: Boolean,
    },
  },
  { collection: 'comments', timestamps: true },
);

export default model<IComment>('comments', CommentSchema);
