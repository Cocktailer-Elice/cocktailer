export interface TokenData {
  id: string;
  email: string;
  isAdmin: boolean;
  isBartender: boolean;
}

export interface IToken {
  token: string;
  expiresIn: string;
}
