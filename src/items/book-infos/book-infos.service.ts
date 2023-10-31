import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {BookLocalInfo} from "./bookInfo.model";
import {BookImage} from "./book-images.model";
import {AddLocalDto} from "./dto/add-local.dto";
import {LanguagesService} from "../languages/languages.service";

@Injectable()
export class BookInfosService {

    constructor(@InjectModel(BookLocalInfo) private bookInfoRepository: typeof BookLocalInfo,
                @InjectModel(BookImage)     private bookImageRepository: typeof BookImage,
                                            private languagesService: LanguagesService) {}

    async add(dto: AddLocalDto) {
        const validateLanguage = await this.languagesService.getById(dto.languageId);

        if (!validateLanguage) {
            throw new HttpException('The provided language does not exists in the Data Base', HttpStatus.NOT_FOUND )
        }

        const localInfoCandidate = await this.bookInfoRepository.findOne({where: {bookId: dto.bookId, languageId: dto.languageId}});
        if(localInfoCandidate) {
            throw new HttpException('The localization already exists in the Data Base', HttpStatus.CONFLICT )
        }

        const localization = await this.bookInfoRepository.create(dto);
        return localization;
    }
}
