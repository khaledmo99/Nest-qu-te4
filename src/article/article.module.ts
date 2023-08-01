// src/article/article.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity'; // Assurez-vous que l'importation est correcte
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Article])], // Assurez-vous que l'entité Article est incluse ici
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
