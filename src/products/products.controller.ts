import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
} from '@nestjs/common';

import { ProductsService } from './products.service';
import {
  CreateProductDto,
  createProductSchema,
} from './dto/create-product.dto';
import { ZodValidationPipe } from 'src/pipes/zod-validation.pipe';
import { Products } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createProductSchema))
  async create(@Body() createProductDto: CreateProductDto) {
    this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Products[]> {
    return this.productsService.findAll();
  }
}
