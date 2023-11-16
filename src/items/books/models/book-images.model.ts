import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {BookLocalInfo} from "./bookInfo.model";

interface BookImageCreationAttributes {
    bookId: number,
    link: string,
    status: string
}

@Table({tableName: 'book_image'})
export class BookImage extends Model<BookImage, BookImageCreationAttributes> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => BookLocalInfo)
    @Column({type: DataType.INTEGER})
    bookId: number;

    @Column({type: DataType.TEXT, allowNull: false})
    link: string;

    @Column({type: DataType.STRING(15), validate: {isIn: [['main', 'additional']]}})
    status: string;

    @BelongsTo(() => BookLocalInfo)
    book: BookLocalInfo;
}