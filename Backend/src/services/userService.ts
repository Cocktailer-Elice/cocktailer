import { userModel } from '../db';
import { AppError, errorNames } from '../routers/middlewares';
import { IUser } from '../db/types';
import { compare } from 'bcrypt';

class UserService {
  private readonly userModel = userModel.Mongo;

  public getUserById = async (id: string) => {
    const founduser: IUser | null = await this.userModel.findById(id);
    if (!founduser)
      throw new AppError(errorNames.inputError, 400, `존재하지 않는 유저`);

    return founduser;
  };

  public findUserEmail = async (name: string, tel: string) => {
    const filter = { name, tel };
    const foundUser = await this.userModel.findByFilter(filter);
    if (!foundUser) {
      throw new AppError(errorNames.inputError, 400, '해당하는 이메일 없음');
    }
    const { email } = foundUser;
    const blurredEmail = `${email.slice(0, 5)}****@${email.split('@')[1]}`;
    return blurredEmail;
  };

  public verifyUser = async (name: string, email: string, tel: string) => {
    const filter = { name, email, tel };
    const foundUser = await this.userModel.findByFilter(filter);
    if (!foundUser) {
      throw new AppError(errorNames.inputError, 400, '해당하는 유저 없음');
    }
    return;
  };

  public validatePassword = async (email: string, password: string) => {
    const filter = { email };
    const user = (await this.userModel.findByFilter(filter)) as IUser;
    const isPasswordMatching = await compare(password, user.password);
    if (!isPasswordMatching)
      throw new AppError(errorNames.inputError, 400, '비밀번호 재확인');
    return;
  };

  public changePassword = async (userId: number, password: string) => {};
}

export default UserService;
