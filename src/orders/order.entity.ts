import { PrimaryColumn, PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  user: string;

  @Column('int')
  cost: number;

  @Column({
    length: 11,
  })
  phone: string;

  @Column()
  barcode: string;

  @Column()
  isFinished: boolean;
}