import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Products } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products) private productRepository: typeof Products,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto as any);
  }

  findAll() {
    return this.productRepository.findAll();
  }
}
