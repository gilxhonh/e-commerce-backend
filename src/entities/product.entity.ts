import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Variant } from './variant.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ default: 0 })
  inventory: number;

  // One-to-many relationship with Variant
  @OneToMany(() => Variant, (variant) => variant.product)
  variants: Variant[];
}
