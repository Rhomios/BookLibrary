import { Module } from '@nestjs/common'
import {SequelizeModule} from "@nestjs/sequelize";
import {Book} from "./books.model";
import {BooksService} from "./books.service";
import {BooksController} from "./books.controller";
import {BookInfosModule} from "../book-infos/book-infos.module";

@Module({
    controllers: [BooksController],
    providers: [BooksService],
    imports: [
        SequelizeModule.forFeature([Book]),
        BookInfosModule
    ],
    exports: [
        BooksService
    ]
})
export class BooksModule {}