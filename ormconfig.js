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
  entities: ['app/databases/entity/**/*.ts'],
  migrations: ['app/databases/migration/**/*.ts'],
  subscribers: ['app/databases/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'app/databases/entity',
    migrationsDir: 'app/databases/migration',
    subscribersDir: 'app/databases/subscriber',
  },
}
