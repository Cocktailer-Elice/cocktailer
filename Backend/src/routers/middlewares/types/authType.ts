export interface Cookie {
  userId: number;
  email: string;
  nickname: string;
  isAdmin: boolean;
  isBartender: boolean;
}

export interface Token {
  token: string;
  expiresIn: string;
}
