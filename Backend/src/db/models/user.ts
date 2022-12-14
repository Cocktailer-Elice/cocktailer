import { IUser, UserCreateDto } from 'types/user';
import User from '../schemas/user';

interface ILibrarianModel {
  create(librarianInfo: UserCreateDto): Promise<IUser | null>;
  findAll(): Promise<IUser[]>;
  findOne(librarianId: string): Promise<IUser | null>;
  checkEmailDuplicate(email: string): Promise<Boolean>;
}

export class LibrarianModel implements ILibrarianModel {
  async create(librarianInfo: UserCreateDto): Promise<IUser | null> {
    const newLibrarian = await User.create(librarianInfo);
    return newLibrarian;
  }

  async findAll(): Promise<IUser[]> {
    const librarians: IUser[] = await User.find({}, '-_id -__v');
    return librarians;
  }

  async findOne(librarianId: string): Promise<IUser | null> {
    const librarian = await User.findOne({ id: librarianId }, '-_id -__v');
    return librarian;
  }

  async checkEmailDuplicate(email: string): Promise<Boolean> {
    const result = await User.find({ email }).countDocuments();
    return result === 1 ? true : false;
  }
}

const librarianModel = new LibrarianModel();

export { ILibrarianModel, librarianModel };
