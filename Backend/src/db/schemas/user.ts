import { Schema, model, connection } from 'mongoose';
import { IUser } from 'types/user';

const UserSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicUrl: {
      type: String,
      default: 'https://profiles.s3.ap-northeast-2.amazonaws.com/{수정예정}',
    },
    nickname: {
      type: String,
      required: true,
    },
    certified: {
      type: Boolean,
      default: false,
    },
  },
  { collection: 'users', timestamps: true },
);

UserSchema.pre('save', async function () {
  const sequenceCollection = connection.collection('sequences');

  const sequence = await sequenceCollection.findOneAndUpdate(
    {
      collectionName: 'users',
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

export default model<IUser>('users', UserSchema);
