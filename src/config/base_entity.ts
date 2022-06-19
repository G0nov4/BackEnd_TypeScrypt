//id
//createAt
//updatedAt

import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @CreateDateColumn({
        name: "createtAt",
        type: "timestamp",

    })
    createdAt!: Date;

    @UpdateDateColumn({
        name: "updatedAt",
        type: "timestamp"
    })
    updatedAt!: Date;
}