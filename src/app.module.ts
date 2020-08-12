import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BooksModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
