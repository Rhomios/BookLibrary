import {Get, HttpException, HttpStatus, Injectable, Param} from '@nestjs/common';
import {Language} from "./languages.model";
import {InjectModel} from "@nestjs/sequelize";
import {AddLanguageDto} from "./dto/add-language.dto";

@Injectable()
export class LanguagesService {

    constructor(@InjectModel(Language) private LanguageRepository: typeof Language) {
    }
    async add(dto: AddLanguageDto) {
        console.log(dto)
        const lng = await this.LanguageRepository.create(dto);
        return lng;
    }

    async getAll(){
        const languageList = await this.LanguageRepository.findAll();
        return languageList;
    }

    async getById(id: number) {
        const language = await this.LanguageRepository.findByPk(id);
        return language;
    }

    async getByValue(code: string) {
        try {
            const language = await this.LanguageRepository.findOne({where: {code: code}});
            return language;
        } catch (e) {
            throw new HttpException('The incorrect data provided.', HttpStatus.NOT_FOUND)
        }
    }
}
