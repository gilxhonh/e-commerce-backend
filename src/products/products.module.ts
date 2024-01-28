import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from '../entities/product.entity'; // Make sure the path is correct based on your project structure

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Register the Product entity
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
