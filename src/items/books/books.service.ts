import {HttpException, HttpStatus, Inject, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Book} from "./books.model";
import {BookInfosService} from "../book-infos/book-infos.service";
import {InitBookDto} from "./dto/init-book.dto";

@Injectable()
export class BooksService{
    constructor(@InjectModel(Book) private bookRepository: typeof Book,
                private bookInfoService: BookInfosService) {
    } // injecting related models, a core model, it's info and image

    async init(dto: InitBookDto) {
        const bookCore = await this.bookRepository.create();

        const localization = await this.bookInfoService.add({...dto, bookId: bookCore.id});
        await bookCore.$set('localizations', [localization.id])
        bookCore.localizations = [localization];
        console.log(bookCore)

        return bookCore;
    }

}