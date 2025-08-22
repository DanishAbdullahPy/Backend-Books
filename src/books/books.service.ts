import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.book.findMany();
  }

  async create(data: { title: string; author: string }) {
    return this.prisma.book.create({ data });
  }
}
