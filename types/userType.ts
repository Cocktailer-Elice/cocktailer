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

export interface ChangePasswordReqData {
  password: string;
  newPassword: string;
  newPasswordCheck: string;
}

export interface UpdateAvatarReqData {
  avatarUrl: string;
}
