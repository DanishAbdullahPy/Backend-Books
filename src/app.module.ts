import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [BooksModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
