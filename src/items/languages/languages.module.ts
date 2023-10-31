import { Module } from '@nestjs/common'
import {SequelizeModule} from "@nestjs/sequelize";
import { LanguagesController } from './languages.controller';
import { LanguagesService } from './languages.service';
import {Language} from "./languages.model";
@Module({
    controllers: [LanguagesController],
    providers: [LanguagesService],
    imports: [
        SequelizeModule.forFeature([Language])
    ],
    exports: [
        LanguagesService
    ]
})
export class LanguagesModule {}