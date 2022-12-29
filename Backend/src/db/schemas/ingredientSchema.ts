import { Schema, model, connection } from 'mongoose';
import { IngredientDbResult } from '../types';

const IngredientSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      required: false,
      unique: true,
    },
  },
  { collection: 'ingredients', timestamps: true },
);

IngredientSchema.virtual('IngredientInfo').get(function (
  this: IngredientDbResult,
) {
  return {};
});

IngredientSchema.pre('save', async function () {
  const sequenceCollection = connection.collection('sequences');

  const sequence = await sequenceCollection.findOneAndUpdate(
    {
      collectionName: 'ingredients',
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

export default model<IngredientDbResult>('ingredients', IngredientSchema);
