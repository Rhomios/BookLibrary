import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {BookImage} from "./book-images.model";
import {Book} from "./books.model";
import {Language} from "../../languages/languages.model";

interface BookInfoCreationAttributes {
    bookId: number,
    title: string,
    description: string,
    languageId: number
}

@Table({tableName: 'book_local_info'})
export class BookLocalInfo extends Model<BookLocalInfo, BookInfoCreationAttributes> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Book)
    @Column({type: DataType.INTEGER})
    bookId: number;

    @Column({type: DataType.STRING(100), allowNull: false})
    title: string;

    @Column({type: DataType.TEXT})
    description: string;

    @ForeignKey(() => Language)
    @Column({type: DataType.INTEGER})
    languageId: number;

    @BelongsTo(() => Language)
    language: Language;

    @BelongsTo(() => Book)
    book: Book;

    @HasMany(() => BookImage)
    images: BookImage[];
}