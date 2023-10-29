import {Column, DataType, Model, Table} from "sequelize-typescript";

interface BookInfoCreationAttributes {
    bookId: number,
    title: string,
    languageId: number

}
// @Table({tableName: 'book_local_info'})
// export class BookLocalInfo extends Model<BookLocalInfo, BookInfoCreationAttributes> {
//     @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
//     id: number;
// }