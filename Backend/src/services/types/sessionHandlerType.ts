import { AnyExpression } from 'mongoose';

export interface ModelFunction {
  (): Promise<AnyExpression>;
}
