module.exports = {
  development: {
    database: process.env.DB_NAME || 'postgres',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'p@ssw0rd',
    host: 'localhost',
    authentication_token_secret: (process.env.AUTH_TOKEN_SECRET || 'dev-secret'),
    dialect: 'postgres',
    logging: true
  },
  test: {
    database: process.env.DB_NAME || 'postgres',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'p@ssw0rd',
    host: 'localhost',
    authentication_token_secret: (process.env.AUTH_TOKEN_SECRET || 'dev-secret'),
    dialect: 'postgres',
    logging: true
  },
  production: {
    database: process.env.DB_NAME || 'postgres',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'p@ssw0rd',
    host: '/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}',
    authentication_token_secret: (process.env.AUTH_TOKEN_SECRET || 'dev-secret'),
    dialect: 'postgres',
    logging: true
  }
};
