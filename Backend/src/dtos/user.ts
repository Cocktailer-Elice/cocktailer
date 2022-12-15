export interface UserCreateReqDto {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  birthday: string;
  tel: string;
  alchol: string;
}

export interface UserGetResDto {
  name: string;
  email: string;
  nickname: string;
  avatarUrl: string;
  isAdmin: boolean;
  isBartender: boolean;
}
