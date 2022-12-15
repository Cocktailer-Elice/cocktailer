export interface User {
  name: string;
  email: string;
  nickname: string;
  avatarUrl: string;
  isAdmin: boolean;
  isBartender: boolean;
}

export interface UserCreateData {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  birthday: string;
  tel: string;
  alchol: string;
}
