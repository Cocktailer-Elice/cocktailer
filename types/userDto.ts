// 서버에 유저 정보를 요청하면 받게 될 데이터
export interface User {
  name: string;
  email: string;
  nickname: string;
  avatarUrl: string;
  isAdmin: boolean;
  isBartender: boolean;
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
