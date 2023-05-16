import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Default endpoint
  @Get()
  getHello(): string {
    return 'Hello NestJS!';
  }

  // New endpoint
  @Get('new')
  newEndpoint(): string {
    return 'My new endpoint';
  }

  // New endpoint with params
  @Get('product/:productId')
  getProduct(@Param('productId') productId: string) {
    return `Product ${productId}`;
  }

  // New endpoint with two params
  @Get('categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ): string {
    return `Product ${productId} and Category ${categoryId}`;
  }

  // New endpoint with query params
  @Get('products')
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return `Products: limit => ${limit} offset => ${offset}`;
  }
}
