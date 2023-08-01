// ormconfig.js
module.exports = {
  type: 'mysql', // ou tout autre type de base de données que vous utilisez
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '076305',
  database: 'blog',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
