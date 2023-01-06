import winston from 'winston';

// const koreanTime = () =>
//   new Date().toLocaleString('ko-KR', {
//     timeZone: 'Asia/Seoul',
//     year: '2-digit',
//     month: '2-digit',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//   });

const alignColorsAndTime = winston.format.combine(
  winston.format.colorize({
    all: true,
  }),
  winston.format.label({
    label: '[LOGGER]',
  }),
  // winston.format.timestamp({ format: koreanTime }),
  winston.format.timestamp({
    format: 'YY-MM-DD hh:mm:ss',
  }),
  winston.format.printf(
    (info) => `[${info.timestamp}] | [${info.level}] | ${info.message}`,
  ),
);

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        alignColorsAndTime,
      ),
    }),
  ],
});

export default logger;
