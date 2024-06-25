import { env } from './src/environment';

const config = {
  client: 'pg',
  connection: env.connectionString,
  useNullAsDefault: true,
  migrations: {
    directory: "./src/migrations",
  },
  seeds: {
    directory: "./src/seeds",
  },

  // Modify this if you want to see the actual SQL queries executed thru knex
  debug: false,
};

module.exports = config; // For CLI use