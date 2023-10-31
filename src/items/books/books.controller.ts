import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {BooksService} from "./books.service";
import {InitBookDto} from "./dto/init-book.dto";

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) {
    }

    @Post('/init')
    init(@Body() initBookDto: InitBookDto) {
        return this.booksService.init(initBookDto);
    }

    @Get()
    getAll() {

    }

    @Get('/:id')
    getById(@Param('id') id: number) {

    }

}