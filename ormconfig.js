const env = process.env

module.exports = {
  type: 'mysql',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  synchronize: false,
  logging: false,
  entities: [`${env.APP_ROOT_DIR}/drivers/databases/entities/**/*{.ts,.js}`],
  migrations: [`${env.APP_ROOT_DIR}/drivers/databases/migration/**/*{.ts,.js}`],
  subscribers: [
    `${env.APP_ROOT_DIR}/drivers/databases/subscriber/**/*{.ts,.js}`,
  ],
  seeds: [`${env.APP_ROOT_DIR}/drivers/databases/seeds/**/*{.ts,.js}`],
  factories: [`${env.APP_ROOT_DIR}/drivers/databases/factories/**/*{.ts,.js}`],
  cli: {
    entitiesDir: `${env.APP_ROOT_DIR}/drivers/databases/entities`,
    migrationsDir: `${env.APP_ROOT_DIR}/drivers/databases/migration`,
    subscribersDir: `${env.APP_ROOT_DIR}/drivers/databases/subscriber`,
  },
}
