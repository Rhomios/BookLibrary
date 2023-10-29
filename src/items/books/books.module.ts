import { Module } from '@nestjs/common'
import {SequelizeModule} from "@nestjs/sequelize";
import {Book} from "./books.model";
import {BooksService} from "./books.service";
import {BooksController} from "./books.controller";
import {BookLocalInfo} from "./bookInfo.model";
import {Language} from "../languages/languages.model";
import {BookImage} from "./book-images.model";

@Module({
    controllers: [BooksController],
    providers: [BooksService],
    imports: [
        SequelizeModule.forFeature([Book, BookLocalInfo, BookImage, Language])
    ]
})
export class BooksModule {}