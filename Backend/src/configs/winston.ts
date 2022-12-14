import winston from 'winston';

const alignColorsAndTime = winston.format.combine(
  winston.format.colorize({
    all: true,
  }),
  winston.format.label({
    label: '[LOGGER]',
  }),
  winston.format.timestamp({
    format: '`YY-MM-DD HH:MM:SS',
  }),
  winston.format.printf(
    (info) => `[${info.timestamp}] | [${info.level}] | ${info.message}`,
  ),
);

const logger = winston.createLogger({
  level: 'debug',
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'prod' ? 'info' : 'silly',
      format: winston.format.combine(
        winston.format.colorize(),
        alignColorsAndTime,
      ),
    }),
  ],
});

export default logger;
