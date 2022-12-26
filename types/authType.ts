export interface LoginReqData {
  email: string;
  password: string;
  isAutoLogin: boolean;
}

// 회원가입 성공, 로그인, 유저 정보 리프레쉬 시 받게 될 데이터
export interface LoginSuccessResData {
  id: number;
  name: string;
  email: string;
  nickname: string;
  avatarUrl: string;
  isBartender: boolean;
}

export interface SendCodeReqData {
  tel: string;
}

export interface ValidateCodeReqData {
  tel: string;
  code: string;
}

export interface CheckEmailReqData {
  email: string;
}
