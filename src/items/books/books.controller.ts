import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {BooksService} from "./books.service";
import {InitBookDto} from "./dto/init-book.dto";
import {AddLocalDto} from "./dto/add-local.dto";
import {AddImageDto} from "./dto/add-image.dto";

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) {
    }

    @Post('/init')
    init(@Body() initBookDto: InitBookDto) {
    }

    @Post('/add')
    add(@Body() addLocalDto: AddLocalDto) {

    }

    @Post('/images/add')
    addImage(@Body() addImageDto: AddImageDto) {

    }

    @Get()
    getAll() {

    }

    @Get('/:id')
    getById(@Param('id') id: number) {

    }

}