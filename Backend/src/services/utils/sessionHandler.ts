// import { AsyncFunction } from '../types';
import { AppError } from '../../errorHandler';
import { errorNames } from '../../errorNames';
import { db } from '../../mongodb';
import { ModelFunction } from '../types/sessionHandlerType';

const sessionHandler = (modelHandler: ModelFunction) => {
  return async () => {
    const session = await db.startSession();
    try {
      session.startTransaction();
      const result = await modelHandler();

      return result;
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      throw new AppError(errorNames.databaseError);
    }
  };
};

export { sessionHandler };
