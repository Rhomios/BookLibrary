import {Column, DataType, Model, Table} from "sequelize-typescript";

interface LanguageCreationAttributes {
    code: string;
}
@Table({tableName: 'languages'})
export class Language extends Model<Language, LanguageCreationAttributes> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING(2), unique: true, allowNull: false})
    code: string;
}