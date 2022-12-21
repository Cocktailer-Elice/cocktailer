export interface LoginReqData {
  email: string;
  password: string;
}

export interface sendCodeReqData {
  tel: string;
}

export interface validateCodeReqData {
  tel: string;
  code: string;
}

export interface checkEmailReqData {
  email: string;
}
