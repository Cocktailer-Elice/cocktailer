import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cron from 'node-cron';

import logger from './winston';
import { redisCache } from './redis';

import globalRouter from './routers';
import { notFoundErrorHandler } from './routers/middlewares';
import { errorHandler } from './routers/middlewares/';

class Server {
  private readonly app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setMiddleware() {
    this.app.use(
      cors({
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      }),
    );

    this.app.use((req, res, next) => {
      logger.info(`✅ 요청 발신지: ${req.rawHeaders[3]}`);
      next();
    });

    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private setRouter() {
    this.app.use('/api', globalRouter);
    this.app.use(notFoundErrorHandler);
    this.app.use(errorHandler);
  }

  public listen(port: string) {
    this.setMiddleware();

    this.setRouter();
    this.app.listen(port, () => {
      cron.schedule('* 5 * * * 1', () => {
        redisCache.del('ranking');
      });
      logger.info(
        `💣 ${port}번 PORT에서 서버를 시작합니다. http://localhost:${port}`,
      );
    });
  }
}

const server = new Server();

export default server;
