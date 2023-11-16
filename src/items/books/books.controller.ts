import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {BooksService} from "./books.service";
import {InitBookDto} from "./dto/init-book.dto";
import {AddLocalDto} from "./dto/add-local.dto";
import {UpdateLocalDto} from "./dto/update-local.dto";

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) {
    }

    @Post('/init')
    init(@Body() initBookDto: InitBookDto) {
        return this.booksService.init(initBookDto);
    }

    @Post('/add/local')
    addLocal(@Body() localDto: AddLocalDto) {
        return this.booksService.addLocal(localDto);
    }

    @Get()
    getAll() {
        return this.booksService.getAll();
    }

    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.booksService.getOne(id);
    }

    @Put('/:id')
    updateLocalization(@Param('id') id: number, @Body() localDto: UpdateLocalDto) {
        return this.booksService.updateLocal(id, localDto);
    }

    @Delete('/:id')
    deleteBook(@Param('id') id: number) {
        return this.booksService.deleteBook(id)
    }

}