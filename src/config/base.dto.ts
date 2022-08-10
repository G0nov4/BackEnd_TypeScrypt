import { IsDate, IsOptional, IsUUID } from "class-validator";

export class BaseDTO {

    @IsOptional()
    @IsUUID()
    id!: string;

    @IsDate()
    @IsOptional()
    createdAt!: Date;

    @IsDate()
    @IsOptional()
    updatedAt!: Date;
}
