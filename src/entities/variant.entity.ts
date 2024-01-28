import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Variant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  size: string;

  @Column()
  color: string;

  // Establish the many-to-one relationship with Product
  @ManyToOne(() => Product, (product) => product.variants)
  product: Product;
}
