import { Table, PrimaryKey, AutoIncrement, Column, DataType, AllowNull, DeletedAt, UpdatedAt, CreatedAt, ForeignKey, BelongsTo, Model } from "sequelize-typescript";
import { Note } from "./Note.model";

@Table({ tableName: "tasks" })
export class Task extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    declare content: string;

    @ForeignKey(() => Note)
    @Column(DataType.INTEGER)
    declare noteId: number;

    @BelongsTo(() => Note)
    declare note: Note;

    @CreatedAt
    @Column(DataType.DATE)
    declare createdAt: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    declare updatedAt?: Date;

    @DeletedAt
    @Column(DataType.DATE)
    declare deletedAt?: Date;

}
