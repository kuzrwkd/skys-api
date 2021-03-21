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
  entities: ['app/drivers/databases/entity/**/*.ts'],
  migrations: ['app/drivers/databases/migration/**/*.ts'],
  subscribers: ['app/drivers/databases/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'app/drivers/databases/entity',
    migrationsDir: 'app/drivers/databases/migration',
    subscribersDir: 'app/drivers/databases/subscriber',
  },
}
