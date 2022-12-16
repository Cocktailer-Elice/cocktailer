export interface TokenData {
  id: string;
  email: string;
  isAdmin: boolean;
  isBartender: boolean;
}

export interface Token {
  token: string;
  expiresIn: string;
}

export interface UserCookie {
  id: string;
  email: string;
  isAdmin: boolean;
  isBartender: boolean;
}
