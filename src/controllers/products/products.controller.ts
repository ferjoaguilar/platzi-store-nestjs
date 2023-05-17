import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // New endpoint with params
  @Get('product/:productId')
  getProduct(@Param('productId') productId: string) {
    return {
      message: `Product ${productId}`,
    };
  }

  // New endpoint with query params
  @Get('')
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `Products: limit => ${limit} offset => ${offset}`,
    };
  }

  // Post endpoint
  @Post('')
  create(@Body() payload: any) {
    return {
      message: 'Create action',
      payload,
    };
  }
}
