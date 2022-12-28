import { verify } from 'jsonwebtoken';

class JwtModule {
  public verifyToken = (token: string, secretKey: string) => {
    try {
      const decodedToken = verify(token, secretKey);

      return decodedToken;
    } catch (err: any) {
      return err.name;
    }
  };
}

const jwtModule = new JwtModule();

export { jwtModule };
