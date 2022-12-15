export interface TokenData {
  id: string;
  isAdmin: boolean;
}

export interface Token {
  token: string;
  expiresIn: number;
}
