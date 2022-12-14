import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {}

  private setMiddleware() {
    dotenv.config({ path: `${__dirname}/.env` });

    this.app.use(
      cors({
        origin: `${process.env.URL}:${process.env.PORT}`,
        credentials: true,
      }),
    );

    this.app.use((req, res, next) => {
      console.log(`✅ req has been arrived from : ${req.rawHeaders[1]}`);
      next();
    });

    //* json middleware
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.setRoute();
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(process.env.PORT, () => {
      console.log(`✅ Server is on : ${process.env.URL}:${process.env.PORT}`);
      console.log('server.ts');
      console.log('시험중입니다');
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
