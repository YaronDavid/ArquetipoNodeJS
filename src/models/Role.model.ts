import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

export interface IRoles {
    id: number
    name: string
}

@Table({
    tableName: "Roles"
})
export default class Roles extends Model implements IRoles {

    @AutoIncrement
    @PrimaryKey
    @Column
    id!: number

    @Column
    name!: string
}