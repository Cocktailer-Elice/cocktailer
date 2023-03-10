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
      index: {
        unique: false,
      },
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      require: true,
      index: {
        unique: false,
      },
    },
    birthday: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
      index: {
        unique: false,
      },
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
      type: Boolean,
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
    avatarUrl: `https://d3jq6qvyumldop.cloudfront.net/avatars/${this.avatarUrl}`,
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
    avatarUrl: `https://d3jq6qvyumldop.cloudfront.net/avatars/${this.avatarUrl}`,
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
