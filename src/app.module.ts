import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Variant } from './entities/variant.entity';
import { Product } from './entities/product.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule globally available
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: process.env.DATABASE_HOST, // database host
      port: parseInt(process.env.DATABASE_PORT, 10), // database port
      database: process.env.DATABASE_NAME, // name of our database
      synchronize: process.env.NODE_ENV !== 'production', // Avoid using synchronize in production
      autoLoadEntities: true, // models will be loaded automatically (recommended)
      entities: [Product, Variant], // specify entities here
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
