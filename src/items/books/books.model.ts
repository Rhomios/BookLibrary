import {HasMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {BookLocalInfo} from "./bookInfo.model";

interface BookCreationAttributes {

}
@Table({tableName: 'books'})
export class Book extends Model<Book, BookCreationAttributes> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @HasMany(() => BookLocalInfo)
    localizations: BookLocalInfo[];
}