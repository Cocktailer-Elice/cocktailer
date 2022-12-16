export const config = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URL: process.env.MONGO_URL,
};

export const awsConfig = {
  S3_ID: process.env.AWS_ID,
  S3_SECRET: process.env.AWS_SECRET,
};

export const tokenConfig = {
  ACCESS_KEY: process.env.ACCESS_KEY,
  ACCESS_EXPIRE: process.env.ACCESS_EXPIRE,
  REFRESH_EXPIRE: process.env.REFRESH_EXPIRE,
};
