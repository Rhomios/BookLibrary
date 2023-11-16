import { Module } from '@nestjs/common'
import {SequelizeModule} from "@nestjs/sequelize";
import {BooksService} from "./books.service";
import {BooksController} from "./books.controller";
import {BookImage} from "./models/book-images.model";
import {Book} from "./models/books.model";
import {BookLocalInfo} from "./models/bookInfo.model";
import {LanguagesModule} from "../languages/languages.module";

@Module({
    controllers: [BooksController],
    providers: [BooksService],
    imports: [
        SequelizeModule.forFeature([Book, BookLocalInfo, BookImage]),
        LanguagesModule
    ],
    exports: [
        BooksService
    ]
})
export class BooksModule {}