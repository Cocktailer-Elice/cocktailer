export interface TokenData {
  id: string;
  isAdmin: boolean;
}

export interface IToken {
  token: string;
  expiresIn: number;
}
