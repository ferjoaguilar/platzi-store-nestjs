import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  // New endpoint with two params
  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ): string {
    return `Product ${productId} and Category ${categoryId}`;
  }
}
