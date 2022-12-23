import { MyCockflow } from './cockflowType';
import { MyCockcipe } from './cocktailsType';
import { MyComment } from './commentType';

// 서버에 유저 정보를 요청하면 받게 될 데이터
export interface User {
  id: number;
  name: string;
  email: string;
  nickname: string;
  avatarUrl: string;
  isBartender: boolean;
}

export interface MyPostsResData {
  comments: MyComment[];
  cockflows: MyCockflow[];
  cocktails: MyCockcipe[];
}

// 서버에 회원가입을 위해 전송할 데이터
export interface UserCreateData {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  birthday: string;
  tel: string;
  alcohol: string;
}

export interface ChangePasswordReqData {
  password: string;
  newPassword: string;
  newPasswordCheck: string;
}

export interface UpdateAvatarReqData {
  avatarUrl: string;
}

// auth / user

// 내가 작성한 칵시피

// 내가 좋아요 한 칵시피

// 내가 작성한 칵플로우
