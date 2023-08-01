import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './entities/article.entity';

@Controller('article')
export class ArticleController {
  constructor(private service: ArticleService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getArticleById(params.id);
  }
  @Get()
  getAll() {
    return this.service.getArticle();
  }

  @Post()
  create(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @Put()
  update(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @Delete(':id')
  deleteArticle(@Param() params) {
    this.service.deleteArticle(params.id);
    return;
  }
}
