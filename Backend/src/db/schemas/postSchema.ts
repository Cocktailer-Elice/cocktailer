import { Schema, model, connection } from 'mongoose';
import { IPost } from '../types';

const PostSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    owner: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: String,
      },
    ],
    deletedAt: {
      type: Date,
    },
  },
  { collection: 'posts', timestamps: true },
);

PostSchema.pre('save', async function () {
  const sequenceCollection = connection.collection('sequences');

  const sequence = await sequenceCollection.findOneAndUpdate(
    {
      collectionName: 'posts',
    },
    { $inc: { value: 1 } },
    {
      upsert: true,
      returnDocument: 'after',
    },
  );

  const id: number = sequence?.value?.value;
  this.set({ id });
});

export default model<IPost>('posts', PostSchema);
