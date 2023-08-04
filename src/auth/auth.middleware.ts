import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (token) {
      try {
        const decoded = await this.jwtService.verifyAsync(token);
        req.user = decoded;
      } catch (err) {
        // Gérer les erreurs de token invalide ici
      }
    }
    next();
  }
}
