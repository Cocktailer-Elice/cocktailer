import { Schema, model, connection } from 'mongoose';
import { ICocktail } from '../../types';
import { CocktailGetResDto } from '../../dtos';

const CocktailSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      required: false,
      unique: true,
    },
    cocktailName: {
      type: String,
      required: true,
    },
    cocktailCategory: {
      type: String,
      required: true,
    },
    cocktailFlavor: [
      {
        type: String,
        required: true,
      },
    ],
    cocktailDegree: {
      type: Number,
      required: true,
    },
    cocktailImgUrl: {
      type: String,
      required: true,
    },
    cocktailProducts: {
      alcohol: [],
      drink: [],
      garnish: [],
    },
  },
  { collection: 'cocktails', timestamps: true },
);

CocktailSchema.virtual('cocktailInfo').get(function (this: CocktailGetResDto) {
  return {
    cocktailName: this.cocktailName,
    cocktailCategory: this.cocktailCategory,
    cocktailFlavor: this.cocktailFlavor,
    cocktailDegree: this.cocktailDegree,
    cocktailImgUrl: `https://profiles.s3.ap-northeast-2.amazonaws.com/${this.cocktailImgUrl}`,
    cocktailProducts: this.cocktailProducts,
  };
});

CocktailSchema.pre('save', async function () {
  const sequenceCollection = connection.collection('sequences');

  const sequence = await sequenceCollection.findOneAndUpdate(
    {
      collectionName: 'cocktails',
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

export default model<ICocktail>('cocktails', CocktailSchema);
