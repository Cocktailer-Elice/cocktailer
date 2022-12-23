export interface Cookie {
  userId: number;
  name: string;
  email: string;
  nickname: string;
  isAdmin: boolean;
  isBartender: boolean;
  avatarUrl: string;
}

export interface Token {
  token: string;
  expiresIn: string;
}
