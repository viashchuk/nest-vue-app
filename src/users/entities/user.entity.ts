import {Column, PrimaryGeneratedColumn, Unique} from "typeorm";

@Unique(["email"])
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string


    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string
}
