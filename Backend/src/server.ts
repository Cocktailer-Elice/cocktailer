import express from 'express';
import cors from 'cors';
import logger from './configs/winston';

import globalRouter from './routers';
import { appErrorHandler, errorHandler, errorLogger } from './middlewares';

class Server {
  private readonly app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setMiddleware() {
    this.app.use(
      cors({
        // 추후 프론트엔드 URL이 결정되면 세부 설정
        // origin: `${process.env.URL}:${process.env.PORT}`,
        // credentials: true,
      }),
    );

    this.app.use((req, res, next) => {
      logger.info(`✅ 요청 발신지: ${req.rawHeaders[3]}`);
      next();
    });

    //* json middleware
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setRouter() {
    this.app.use('/', globalRouter);
    this.app.use(errorLogger);
    this.app.use(errorHandler);
    this.app.use(appErrorHandler);
  }

  public listen(port: string) {
    this.setMiddleware();

    this.setRouter();
    this.app.listen(port, () => {
      logger.info(
        `💣 ${port}번 PORT에서 서버를 시작합니다. http://localhost:${port}`,
      );
    });
  }
}

const server = new Server();

export default server;
