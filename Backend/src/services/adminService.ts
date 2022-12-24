import { userModel } from '../db';
import { AppError } from '../errorHandler';
import { errorNames } from '../errorNames';

class UserService {
  private readonly userModel = userModel.Mongo;

  public verifyBartender = async (userId: number) => {
    const filter = { id: userId };
    const foundUser = await this.userModel.findByFilter(filter);
    if (!foundUser || foundUser.deletedAt) {
      throw new AppError(errorNames.inputError, 400, '해당하는 유저 없음');
    }
    if (foundUser.isBartender) {
      throw new AppError(errorNames.inputError, 400, '이미 바텐더인 유저');
    }
    const update = { isBartender: true };
    await this.userModel.update(filter, update);
    return;
  };

  public changeUserRole = async (userId: number) => {
    const filter = { id: userId };
    const foundUser = await this.userModel.findByFilter(filter);
    if (!foundUser || foundUser.deletedAt) {
      throw new AppError(errorNames.inputError, 400, '해당하는 유저 없음');
    }
    if (foundUser.isAdmin) {
      throw new AppError(errorNames.inputError, 400, '이미 관리자인 유저');
    }

    const update = { isAdmin: true };
    await this.userModel.update(filter, update);
    return;
  };
}

export default UserService;
