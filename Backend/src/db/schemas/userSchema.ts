import { Schema, model, connection } from 'mongoose';
import { IUser } from '../types';

const UserSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      require: true,
      index: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
      index: true,
    },
    avatarUrl: {
      type: String,
      default: '1671798714000',
    },
    points: {
      type: Number,
      default: 0,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBartender: {
      default: false,
    },
    myLikes: [
      {
        type: Number,
      },
    ],
    isPasswordTemporary: {
      type: Boolean,
      default: false,
    },
    isApplyingBartender: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
    },
  },
  { collection: 'users', timestamps: true, versionKey: false },
);

UserSchema.virtual('userGetResData').get(function (this: IUser) {
  return {
    id: this.id,
    name: this.name,
    email: this.email,
    nickname: this.nickname,
    avatarUrl: `https://cocktailer.s3.ap-northeast-2.amazonaws.com/avatars/${this.avatarUrl}`,
    isBartender: this.isBartender === true ? true : false,
    isPasswordTemporary: this.isPasswordTemporary ? true : false,
  };
});

UserSchema.virtual('tokenData').get(function (this: IUser) {
  return {
    id: this.id,
    name: this.name,
    email: this.email,
    nickname: this.nickname,
    avatarUrl: `https://cocktailer.s3.ap-northeast-2.amazonaws.com/avatars/${this.avatarUrl}`,
    isAdmin: this.isAdmin,
    isBartender: this.isBartender === true ? true : false,
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
