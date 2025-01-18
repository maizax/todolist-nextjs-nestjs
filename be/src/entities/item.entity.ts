import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'items' })
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  priority: boolean;

  @Column()
  createdAt: Date;
}
