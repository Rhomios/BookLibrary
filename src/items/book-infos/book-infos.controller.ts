import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {BookInfosService} from "./book-infos.service";
import {AddLocalDto} from "./dto/add-local.dto";
import {AddImageDto} from "./dto/add-image.dto";

@Controller('bookinfos')
export class BookInfosController {

    constructor(private bookInfosService: BookInfosService) {
    }

    @Get()
    getAll() {

    }

    @Get('/:id')
    getById(@Param('id') id: number) {

    }

    @Post('/add')
    add(@Body() addLocalDto: AddLocalDto) {

    }

    @Post('/images/add')
    addImage(@Body() addImageDto: AddImageDto) {

    }

}
