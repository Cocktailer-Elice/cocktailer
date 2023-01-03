import { IGame } from './../store/cockgorithmSlice';

export const gameColors: string[] = [
  '#ff6b6b',
  '#f06595',
  '#cc5de8',
  '#845ef7',
  '#339af0',
  '#22b8cf',
  '#20c997',
  '#94d82d',
  '#fcc419',
  '#ff922b',
];

const questionType = {
  lightVersion: [
    {
      question: '어떤 종류의 칵테일이 땡겨요?',
      filterName: 'category',
      options: [
        { optionName: '달콤한 칵테일', filterValue: 'sweet' },
        { optionName: '과일 맛이 나는 칵테일', filterValue: 'fruit' },
        { optionName: '상큼한 칵테일', filterValue: 'refreshing' },
        { optionName: '스무디 칵테일', filterValue: 'smoothie' },
      ],
    },
    {
      question: '베이스 술은 뭐가 좋아요?',
      filterName: 'alcohol',
      options: [
        { optionName: '잔', filterValue: '잔' },
        { optionName: '럼', filterValue: '럼' },
        { optionName: '보드카', filterValue: '보드카' },
        { optionName: '위스키', filterValue: '위스키' },
        { optionName: '브랜디', filterValue: '브랜디' },
        { optionName: '데킬라', filterValue: '데킬라' },
      ],
    },
    {
      question: '좋아하는 음료는요?',
      filterName: 'ingredients',
      options: [
        { optionName: '시럽', filterValue: '시럽' },
        { optionName: '주스', filterValue: '주스' },
        { optionName: '탄산음료', filterValue: '탄산음료' },
      ],
    },
    {
      question: '혹시 이중에 추가하고 싶은 재료가 있나요?',
      filterName: 'ingredients',
      options: [
        { optionName: '꿀', filterValue: '꿀' },
        { optionName: '타바스코', filterValue: '타바스코' },
        { optionName: '우스터 소스', filterValue: '우스터 소스' },
        { optionName: '소금', filterValue: '소금' },
        { optionName: '후추', filterValue: '후추' },
        { optionName: '우유', filterValue: '우유' },
      ],
    },
    {
      question: '당신의 주량 레벨은?!',
      filterName: 'degree',
      options: [
        { optionName: 'Lv.0 알쓰! (0도)', filterValue: '0~0' },
        { optionName: 'Lv.1 알린이 (0~5도)', filterValue: '0~5' },
        { optionName: 'Lv.2 알콜 러버 (5~10도)', filterValue: '5~10' },
        {
          optionName: 'Lv.3 알콜 탐험가 (10~15도)',
          filterValue: '10~15',
        },
        { optionName: 'Lv.4 알콜 러버 (15~20도)', filterValue: '15~20' },
        {
          optionName: 'Lv.5 알콜 고인물 (20도 이상)',
          filterValue: '20~100',
        },
      ],
    },
  ],

  deepVersion: [
    {
      question: '어떤 종류의 칵테일이 땡겨요?',
      filterName: 'category',
      options: [
        { optionName: '달콤한 칵테일', filterValue: 'sweet' },
        {
          optionName: '술맛이 진한 칵테일',
          filterValue: 'dry',
        },
        { optionName: '따뜻한 칵테일', filterValue: 'hot' },
      ],
    },
    {
      question: '베이스 술은 뭐가 좋아요?',
      filterName: 'alcohol',
      options: [
        { optionName: '진', filterValue: '진' },
        { optionName: '럼', filterValue: '럼' },
        { optionName: '보드카', filterValue: '보드카' },
        { optionName: '위스키', filterValue: '위스키' },
        { optionName: '브랜디', filterValue: '브랜디' },
        { optionName: '데킬라', filterValue: '데킬라' },
      ],
    },
    {
      question: '좋아하는 음료는요?',
      filterName: 'ingredients',
      options: [
        { optionName: '시럽', filterValue: '시럽' },
        { optionName: '주스', filterValue: '주스' },
        { optionName: '탄산음료', filterValue: '탄산음료' },
      ],
    },
    {
      question: '혹시 이중에 추가하고 싶은 재료가 있나요?',
      filterName: 'ingredients',
      options: [
        { optionName: '꿀', filterValue: '꿀' },
        { optionName: '타바스코', filterValue: '타바스코' },
        { optionName: '우스터 소스', filterValue: '우스터 소스' },
        { optionName: '소금', filterValue: '소금' },
        { optionName: '후추', filterValue: '후추' },
        { optionName: '우유', filterValue: '우유' },
      ],
    },
    {
      question: '당신의 주량 레벨은?!',
      filterName: 'degree',
      options: [
        { optionName: 'Lv.0 알쓰! (0도)', filterValue: '0~0' },
        { optionName: 'Lv.1 알린이 (0~5도)', filterValue: '0~5' },
        { optionName: 'Lv.2 알콜 러버 (5~10도)', filterValue: '5~10' },
        {
          optionName: 'Lv.3 알콜 탐험가 (10~15도)',
          filterValue: '10~15',
        },
        { optionName: 'Lv.4 알콜 러버 (15~20도)', filterValue: '15~20' },
        {
          optionName: 'Lv.5 알콜 고인물 (20도 이상)',
          filterValue: '20~100',
        },
      ],
    },
  ],
};

const getRandomColor = (): string => {
  const randomNum = Math.floor(Math.random() * 10);
  return gameColors[randomNum];
};

export const gameDatas: IGame[] = [
  {
    gameEmoji: '🤩',
    gameTitle: '기분 UP! 텐션 UP! 하고싶다면?',
    gameColor: getRandomColor(),
    message: '칵테일러가 추천하는 칵테일 드시고 기분 UP! 텐션 UP!',
    questions: questionType.lightVersion,
  },
  {
    gameEmoji: '😭',
    gameTitle: '세상이 떠나가라 울고 싶다면?',
    gameColor: getRandomColor(),
    message: '칵테일러가 추천하는 칵테일 드시고 마음 추스리세요!',
    questions: questionType.deepVersion,
  },
  {
    gameEmoji: '🎉',
    gameTitle: '오늘이 기념일이라면?',
    gameColor: getRandomColor(),
    message: ' 칵테일러가 기념일에 즐기기 좋은 칵테일을 추천해드릴께요!',
    questions: questionType.lightVersion,
  },
  {
    gameEmoji: '❄️',
    gameTitle: '눈 오는 추운 날, 칵테일 한 잔 하고 싶다면?',
    gameColor: getRandomColor(),
    message: '칵테일러가 몸이 따뜻해지는 칵테일을 추천해드릴께요!',
    questions: questionType.deepVersion,
  },
  {
    gameEmoji: '🕚',
    gameTitle: '늦은 밤, 연인과 분위기 있게 칵테일 한 잔 하고 싶다면?',
    gameColor: getRandomColor(),
    message: '칵테일러가 분위기 있는 칵테일을 추천해드릴께요!',
    questions: questionType.deepVersion,
  },
  {
    gameEmoji: '👽',
    gameTitle: '오늘 밤, 에일리언이 되고 싶다면?',
    gameColor: getRandomColor(),
    message: '칵테일러가 당신을 에일리언으로 만들어 드릴께요!',
    questions: questionType.lightVersion,
  },
  {
    gameEmoji: '🚀',
    gameTitle: '갑자기 어디론가 쓩~ 하고 떠나버리고 싶다면?',
    gameColor: getRandomColor(),
    message: '칵테일러가 당신을 꿈나라로 보내드릴게요.',
    questions: questionType.lightVersion,
  },
  {
    gameEmoji: '🌘',
    gameTitle: '늦은 새벽 고독하게 한 잔 즐기고 싶다면?',
    gameColor: getRandomColor(),
    message: '고.독.러를 위한 칵테일을 추천해드릴께요.',
    questions: questionType.deepVersion,
  },
];
