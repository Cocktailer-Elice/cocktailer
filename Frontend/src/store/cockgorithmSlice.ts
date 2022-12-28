import { createSlice } from '@reduxjs/toolkit';
import gameDatas from '../constants/gameDatas.json';
import {
  CockgorithmReqData,
  CockgorithmCocktail,
} from '../../../types/cockgorithmType';

export interface IGame {
  gameEmoji: string;
  gameTitle: string;
  message: string;
  questions: {
    question: string;
    filterName: string;
    options: { optionName: string; filterValue: string }[];
  }[];
}

interface cockgorithmState {
  isModalOpen: boolean;
  selectedGame: IGame;
  isLoadingOpen: boolean;
  isGameResultOpen: boolean;
  isFoundCocktail: boolean;
  filters: CockgorithmReqData;
  cocktailInfo: CockgorithmCocktail;
  questionCounter: number;
}

const cocktailMockData = {
  id: 1,
  name: '마티니 블루',
  img: '칵테일 이미지 URL',
  degree: 1,
  content: '마티니 블루는 주절주절',
};

const cockgorithmInitialState: cockgorithmState = {
  isModalOpen: false,
  selectedGame: gameDatas[0],
  isLoadingOpen: false,
  isGameResultOpen: false,
  isFoundCocktail: false,
  filters: {
    category: '',
    alcohol: '',
    degree: '',
    ingredients: [],
  },
  cocktailInfo: cocktailMockData,
  questionCounter: 0,
};

interface GamePayload {
  payload: IGame;
}

interface BooleanPayload {
  payload: boolean;
}

type filterType = 'ingredients' | 'degree' | 'alcohol' | 'category';

interface FilterPayload {
  payload: {
    filterName: filterType;
    filterValue: string;
  };
}

interface CocktailPayload {
  payload: CockgorithmCocktail;
}

export const cockgorithmSlice = createSlice({
  name: 'cockgorithm',
  initialState: cockgorithmInitialState,
  reducers: {
    resetCockgorithmState(state, action) {
      return { ...state, ...cockgorithmInitialState };
    },
    setSelectedGame(state, action: GamePayload) {
      return { ...state, selectedGame: action.payload };
    },
    setIsModalOpen(state, action: BooleanPayload) {
      return { ...state, isModalOpen: action.payload };
    },
    increaseQuestionCounter(state, action) {
      return { ...state, questionCounter: state.questionCounter + 1 };
    },
    setIsLoadingOpen(state, action: BooleanPayload) {
      return { ...state, isLoadingOpen: action.payload };
    },
    setIsGameResultOpen(state, action: BooleanPayload) {
      return { ...state, isGameResultOpen: action.payload };
    },
    setIsFoundCocktail(state, action: BooleanPayload) {
      return { ...state, isFoundCocktail: action.payload };
    },
    setCocktailInfo(state, action: CocktailPayload) {
      return { ...state, cocktailInfo: action.payload };
    },
    setFilters(state, action: FilterPayload) {
      const filterName: filterType = action.payload.filterName;
      const filterValue: string = action.payload.filterValue;
      let newFilters = {
        ...state.filters,
      };

      if (filterName === 'ingredients') {
        newFilters[filterName] = [...state.filters.ingredients, filterValue];
      } else if (
        filterName === 'alcohol' ||
        filterName === 'category' ||
        filterName === 'degree'
      ) {
        newFilters[filterName] = filterValue;
      }
      return { ...state, filters: newFilters };
    },
  },
});
