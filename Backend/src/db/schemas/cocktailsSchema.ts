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

    category: {
      // 진, 보드카 등의 Base 주류가 들어가게됨 하이볼,
      // https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=alice_cd&logNo=220300532648
      type: String,
      require: true,
    },

    name: {
      type: String,
      required: true,
    },

    official: {
      // admin 이 생성하는 '국제 바텐더 협회' 공식 레시피 (어드민만 추가 가능)
      type: Boolean,
      default: false,
      require: true,
    },

    flavor: [
      {
        type: String,
        required: true,
      },
    ],

    degree: {
      type: Number,
      required: true,
    },

    img: {
      type: String,
      required: true,
    },

    //[    직접입력    ]  [     직접입력     ]  [    직접입력   ]

    liquid: {
      type: Object,
      require: true,
    },

    ratio: {
      type: Object,
      require: true,
    },

    content: {
      type: String,
      require: true,
    },
  },

  { collection: 'cocktails', timestamps: true },
);

CocktailSchema.virtual('cocktailInfo').get(function (this: CocktailGetResDto) {
  return {
    owner: this.owner,
    category: this.category,
    name: this.name,
    official: this.official,
    flavor: this.flavor,
    degree: this.degree,
    img: `https://profiles.s3.ap-northeast-2.amazonaws.com/${this.img}`,
    liquid: this.liquid,
    ratio: this.ratio,
    content: this.content,
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
