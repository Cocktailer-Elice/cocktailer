export interface Cookie {
  userId: number;
  name: string;
  email: string;
  nickname: string;
  isAdmin: boolean;
  isBartender: boolean;
  avatarUrl: string;
  iat: number;
  exp: number;
}

export interface TokenData {
  token: string;
  expiresIn: string;
}
