import { Schema, model, connection } from 'mongoose';
import { Cocktail } from '../../services/types';
import { CocktailGetResDto } from 'types';
import { boolean } from 'joi';

//참조 https://www.notion.so/90143a86ded04b23b0094946940de37d

const CocktailSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      required: false,
      unique: true,
    },

    owner: {
      //작성자 이름
      type: String,
      require: true,
    },

    cocktailName: {
      type: String,
      required: true,
    },

    cocktailCategory: {
      //검토필요
      type: String,
      required: true,
    },

    official: {
      // admin 이 생성하는 '국제 바텐더 협회' 공식 레시피 (어드민만 추가 가능)
      type: Boolean,
      default: false,
      require: true,
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
      //이 방식은 폐기하게 될것이나 IngredientSchema등으로 대체 될 것.
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

export default model<Cocktail>('cocktails', CocktailSchema);
