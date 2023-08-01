import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  async getArticle(): Promise<Article[]> {
    console.log(
      'this.articleRepository.find() :>> ',
      await this.articleRepository.find(),
    );
    return await this.articleRepository.find();
  }

  async getArticleById(id: number): Promise<Article[]> {
    return await this.articleRepository.find({
      // Properties to return. We don't want the password property.
      select: ['title', 'contnt', 'author', 'creationDate'],
      where: [{ id: id }],
    });
  }

  saveArticle(Article: Article): Promise<Article> {
    return this.articleRepository.save(Article);
  }

  deleteArticle(Article: Article): void {
    this.articleRepository.delete(Article);
  }
}
