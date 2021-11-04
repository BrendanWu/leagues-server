import * as dotenv from  "dotenv"
dotenv.config()

export default {
  IS_PROD: process.env.NODE_ENV === "production",
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_CLUSTER: process.env.DB_CLUSTER,
  SESS_SECRET: process.env.SESS_SECRET,
  COOKIE_NAME: process.env.COOKIE_NAME,
  sandbox: process.env.sandbox
};
