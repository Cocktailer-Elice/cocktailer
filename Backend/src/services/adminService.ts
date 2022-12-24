import { userModel } from '../db';
import { AppError } from '../errorHandler';
import { errorNames } from '../errorNames';
import { IAdminDependencies } from './types/adminType';

class AdminDependencies implements IAdminDependencies {
  public userModel = userModel.Mongo;
}

class AdminService {
  constructor(public dependencies: AdminDependencies) {}

  public verifyBartender = async (userId: number) => {
    const filter = { id: userId };
    const foundUser = await this.dependencies.userModel.findByFilter(filter);
    if (!foundUser || foundUser.deletedAt) {
      throw new AppError(errorNames.inputError, 400, '해당하는 유저 없음');
    }
    if (foundUser.isBartender) {
      throw new AppError(errorNames.inputError, 400, '이미 바텐더인 유저');
    }
    const update = { isBartender: true };
    await this.dependencies.userModel.update(filter, update);
    return;
  };

  public changeUserRole = async (userId: number) => {
    const filter = { id: userId };
    const foundUser = await this.dependencies.userModel.findByFilter(filter);
    if (!foundUser || foundUser.deletedAt) {
      throw new AppError(errorNames.inputError, 400, '해당하는 유저 없음');
    }
    if (foundUser.isAdmin) {
      throw new AppError(errorNames.inputError, 400, '이미 관리자인 유저');
    }

    const update = { isAdmin: true };
    await this.dependencies.userModel.update(filter, update);
    return;
  };
}

const adminDependencies = new AdminDependencies();

const adminService = new AdminService(adminDependencies);

export default adminService;
