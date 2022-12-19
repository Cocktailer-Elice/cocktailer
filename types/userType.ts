// 서버에 유저 정보를 요청하면 받게 될 데이터
export interface User {
  id: number;
  name: string;
  email: string;
  nickname: string;
  avatarUrl: string;
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

// 비밀번호 제외 회원정보 수정 시 서버에 보낼 데이터
export interface UserUpdateData {}

// 비밀번호 변경 시 서버에 보낼 데이터
export interface UserUpdatePasswordData {}
