import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello NestJS!';
  }

  @Get('new')
  newEndpoint(): string {
    return 'My new endpoint';
  }

  @Get('product/:productId')
  getProduct(@Param('productId') productId: string) {
    return `Product ${productId}`;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(@Param('categoryId') categoryId: string, @Param('productId') productId: string): string {
    return `Product ${productId} and Category ${categoryId}`;
  }
}
