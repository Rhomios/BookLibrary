import {Column, DataType, Model, Table} from "sequelize-typescript";

interface BookCreationAttributes {

}
@Table({tableName: 'books'})
export class Book extends Model<Book, BookCreationAttributes> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
}