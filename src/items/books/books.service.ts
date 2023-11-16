import {HttpException, HttpStatus, Inject, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {InitBookDto} from "./dto/init-book.dto";
import {LanguagesService} from "../languages/languages.service";
import {AddLocalDto} from "./dto/add-local.dto";
import {Book} from "./models/books.model";
import {BookLocalInfo} from "./models/bookInfo.model";
import {BookImage} from "./models/book-images.model";
import {Language} from "../languages/languages.model";
import {UpdateLocalDto} from "./dto/update-local.dto";

@Injectable()
export class BooksService{
    constructor(@InjectModel(Book)          private bookRepository: typeof Book,
                @InjectModel(BookLocalInfo) private bookInfoRepository: typeof BookLocalInfo,
                @InjectModel(BookImage)     private bookImageRepository: typeof BookImage,
                                            private languagesService: LanguagesService) {} // injecting related models, a core model, it's info and image

    async languageValidation(id: number) {
        const validateLanguage = await this.languagesService.getById(id);

        if (!validateLanguage) {
            throw new HttpException('The provided language does not exists in the Data Base', HttpStatus.NOT_FOUND);
        }
    }
    async init(dto: InitBookDto) {
        try {
            await this.languageValidation(dto.languageId)

            const bookCore = await this.bookRepository.create();

            const localization = await this.addLocal({...dto, bookId: bookCore.id});
            await bookCore.$set('localizations', [localization.id])
            bookCore.localizations = [localization];

            return bookCore;
        } catch (e) {
            return e.message;
        }
    }

    async addLocal(dto: AddLocalDto) {
        try {
            await this.languageValidation(dto.languageId)

            const localInfoCandidate = await this.bookInfoRepository.findOne({where: {bookId: dto.bookId, languageId: dto.languageId}});
            if(localInfoCandidate) {
                throw new HttpException('Such a localization already exists in the Data Base', HttpStatus.CONFLICT );
            }

            const localization = await this.bookInfoRepository.create(dto);
            return localization;
        } catch (e) {
            return e.message;
        }
    }

    async getAll() {
        try {
            const bookList = await this.bookRepository.findAll({include: [{model: BookLocalInfo, include: [Language, BookImage]}]});

            return bookList;
        } catch (e) {
            return e.message;
        }
    }

    async getOne(id: number) {
        try {
            const book = await this.bookRepository.findByPk(id, {include: [{model: BookLocalInfo, include: [Language, BookImage]}]})
            return book;
        } catch (e) {
            return e.message;
        }
    }

    async updateLocal(id: number, dto: UpdateLocalDto) {
        try{
            let bookCandidate = await this.bookInfoRepository.findByPk(id);
            if (!bookCandidate) {
                throw new HttpException('The book does not exist', HttpStatus.NOT_FOUND);
            }

            Object.assign(bookCandidate, dto);
            await bookCandidate.save();
            return bookCandidate;
        } catch (e) {
            return e.message;
        }
    }

    async deleteBook(id: number) {
        try{
            const book = await Book.findByPk(id);
            if(!book) {
                throw new HttpException('This book was not found', HttpStatus.NOT_FOUND);
            }
            await book.destroy();
            return book;

        } catch (e) {

        }
    }
}