export interface Token {
  id?: number;
  name: string;
  email: string;
  nickname: string;
  isAdmin: boolean;
  isBartender: boolean;
  avatarUrl: string;
  exp?: number;
}

export interface Cookie {
  userId?: number;
  name: string;
  email: string;
  nickname: string;
  isAdmin: boolean;
  isBartender: boolean;
  avatarUrl: string;
  exp?: number;
}
