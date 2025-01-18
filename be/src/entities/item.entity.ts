import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'items' })
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  priority: boolean;

  @Column()
  createdAt: Date;
}
