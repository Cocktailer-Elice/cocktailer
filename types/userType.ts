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
  isPasswordTemporary?: boolean;
}

interface MyLike {
  id: number;
  img: string;
  name: string;
}

// 마이페이지에서 내가 작성한 글들을 요청하면 받는 데이터
export interface MyPostsResData {
  myLikes: MyLike[];
  comments: MyComment[];
  cockflows: MyCockflow[];
  cocktails: MyCockcipe[];
}

export interface MyLikesReqData {
  myLikes: MyLike[];
}

// 서버에 회원가입을 위해 전송할 데이터
export interface UserCreateData {
  name: string;
  email: string;
  password: string;
  birthday: string;
  tel: string;
  alcohol: string;
}

// 이메일 찾기를 위해 서버에 보낼 데이터
export interface FindEmailReqData {
  name: string;
  tel: string;
}

// 비밀번호 찾기를 위해 서버에 보낼 데이터
export interface FindPasswordReqData {
  name: string;
  email: string;
  tel: string;
}

export interface ChangePasswordReqData {
  password: string;
  newPassword: string;
}

export interface UpdateAvatarReqData {
  avatarUrl: string;
}
