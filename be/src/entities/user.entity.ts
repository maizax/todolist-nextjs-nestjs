import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 20, {
    message: 'The name must be at least 4 but not longer than 20 characters',
  })
  @IsNotEmpty({ message: 'The name is required' })
  name: string;

  @Column({ unique: true })
  @IsEmail({}, { message: 'Incorrect email' })
  @IsNotEmpty({ message: 'The email is required' })
  email: string;

  @Column()
  createdAt: Date;
}
