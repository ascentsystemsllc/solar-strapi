module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),        
        ssl: false,
      },
      acquireConnectionTimeout: 1000000,
      debug:true,
      options: {
        pool: {
          min: 0,
            max: 1,
            acquireTimeoutMillis: 900000,
            createTimeoutMillis: 900000,
            destroyTimeoutMillis: 900000,
        }
      },
    },
  },
});