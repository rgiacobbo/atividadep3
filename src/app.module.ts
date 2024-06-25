import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { ProductsController } from './products/products.controller';
import { LoggerMiddleware } from './commom/middleware/logger.middleware';
import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from './database/database.config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [SequelizeModule.forRoot(dataBaseConfig), ProductsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ProductsController);
  }
}
