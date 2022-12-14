import { IUser, UserCreateDto } from 'types/user';
import User from '../schemas/user';

interface ILibrarianModel {
  create(librarianInfo: LibrarianInfo): Promise<ILibrarian | null>;
  findAll(): Promise<ILibrarian[]>;
  findOne(librarianId: string): Promise<ILibrarian | null>;
  checkEmailDuplicate(email: string): Promise<Boolean>;
}

export class LibrarianModel implements ILibrarianModel {
  async create(librarianInfo: LibrarianInfo): Promise<ILibrarian | null> {
    const newLibrarian = await Librarian.create(librarianInfo);
    return newLibrarian;
  }

  async findAll(): Promise<ILibrarian[]> {
    const librarians: ILibrarian[] = await Librarian.find({}, '-_id -__v');
    return librarians;
  }

  async findOne(librarianId: string): Promise<ILibrarian | null> {
    const librarian = await Librarian.findOne({ id: librarianId }, '-_id -__v');
    return librarian;
  }

  async checkEmailDuplicate(email: string): Promise<Boolean> {
    const result = await Librarian.find({ email }).countDocuments();
    return result === 1 ? true : false;
  }
}

const librarianModel = new LibrarianModel();

export { ILibrarianModel, librarianModel };
