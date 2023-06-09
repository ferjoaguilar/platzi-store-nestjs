import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('')
  getProducts() {
    return this.productsService.findAll();
  }

  // New endpoint with params
  @Get(':productId')
  // Custom status code
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  // Post endpoint
  @Post('')
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  // Put endpoint
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(id, payload);
  }

  // Delete endpoint
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
