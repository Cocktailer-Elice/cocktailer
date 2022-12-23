export interface LoginReqData {
  email: string;
  password: string;
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
