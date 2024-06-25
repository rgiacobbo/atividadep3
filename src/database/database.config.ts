import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: 'src/database/sqlite/database.sqlite3',
  autoLoadModels: true,
  synchronize: true,
};
