import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // This is a TypeORM decorator to define an entity class.
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column({ length: 255 })
  contnt: string;

  @Column({ length: 80 })
  author: string;

  @Column()
  creationDate: number;
}
