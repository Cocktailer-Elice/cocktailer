import { userModel } from '../db';
import { AppError, errorNames } from '../middlewares';
import { IUser } from '../types';

class UserService {
  private readonly userModel = userModel;

  public async getUserById(id: string): Promise<IUser | null> {
    const founduser: IUser | null = await this.userModel.findById(id);
    if (!founduser)
      throw new AppError(errorNames.inputError, 400, `존재하지 않는 유저`);

    return founduser;
  }
}

export default UserService;
