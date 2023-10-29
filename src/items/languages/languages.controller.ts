import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {AddLanguageDto} from "./dto/add-language.dto";
import {LanguagesService} from "./languages.service";

@Controller('languages')
export class LanguagesController {

    constructor(private  languageService: LanguagesService) {
    }

    @Post('/add')
    add(@Body() languageDto: AddLanguageDto) {
        return this.languageService.add(languageDto);
    }
    @Get('/all')
    getAll() {
        return this.languageService.getAll();
    }
    @Get('/value')
    getByValue(@Query('code') code: string) {
        return this.languageService.getByValue(code);
    }
    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.languageService.getById(id);
    }
}
