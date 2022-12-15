export interface UserCreateDto {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}

export interface UserGetDto {
  name: string;
  email: string;
  nickname: string;
  avatarUrl: string;
  isAdmin: string;
  isBartender: boolean;
}
