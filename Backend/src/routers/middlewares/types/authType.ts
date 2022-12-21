export interface Cookie {
  userId: string;
  email: string;
  nickname: string;
  isAdmin: boolean;
  isBartender: boolean;
}

export interface Token {
  token: string;
  expiresIn: string;
}
