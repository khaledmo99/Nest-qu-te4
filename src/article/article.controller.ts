import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './entities/article.entity';
import { JwtAuthGuards } from 'src/auth/jwt.auth.guards';

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
  @UseGuards(JwtAuthGuards)
  create(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @Put()
  @UseGuards(JwtAuthGuards)
  update(@Body() article: Article) {
    return this.service.saveArticle(article);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuards)
  deleteArticle(@Param() params) {
    this.service.deleteArticle(params.id);
    return;
  }
}
