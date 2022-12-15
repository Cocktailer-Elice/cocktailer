import { Schema, model, connection } from 'mongoose';
import { IUser } from '../../types';
import { User } from '../../dtos';

const UserSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      required: false,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      default: '{수정예정}',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBartender: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
    },
  },
  { collection: 'users', timestamps: true },
);

UserSchema.virtual('userInfo').get(function (this: User) {
  return {
    name: this.name,
    email: this.email,
    nickname: this.nickname,
    avatarUrl: `https://profiles.s3.ap-northeast-2.amazonaws.com/${this.avatarUrl}`,
    isAdmin: this.isAdmin,
    isBartender: this.isBartender,
  };
});

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
