import { Module } from '@nestjs/common';
import { BookInfosController } from './book-infos.controller';
import { BookInfosService } from './book-infos.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Language} from "../languages/languages.model";
import {BookLocalInfo} from "./bookInfo.model";
import {BookImage} from "./book-images.model";
import {LanguagesModule} from "../languages/languages.module";

@Module({
  controllers: [BookInfosController],
  providers: [BookInfosService],
  imports: [
      SequelizeModule.forFeature([BookLocalInfo, BookImage, Language]),
      LanguagesModule
  ],
    exports: [
        BookInfosService
    ]
})
export class BookInfosModule {}
