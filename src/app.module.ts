import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import { SequelizeModule } from '@nestjs/sequelize';
import {Book} from "./items/books/books.model";
import {Language} from "./items/languages/languages.model";
import {LanguagesModule} from "./items/languages/languages.module";
import {BooksModule} from "./items/books/books.module";
import {BookLocalInfo} from "./items/book-infos/bookInfo.model";
import {BookImage} from "./items/book-infos/book-images.model";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: '.env'
      }),
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [Language, Book, BookLocalInfo, BookImage],
          autoLoadModels: true
      }),
      LanguagesModule,
      BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
