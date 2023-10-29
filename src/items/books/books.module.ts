import { Module } from '@nestjs/common'
import {SequelizeModule} from "@nestjs/sequelize";
import {Book} from "./books.model";
import {BooksService} from "./books.service";
import {BooksController} from "./books.controller";

@Module({
    controllers: [BooksController],
    providers: [BooksService],
    imports: [
        SequelizeModule.forFeature([Book])
    ]
})
export class BooksModule {}