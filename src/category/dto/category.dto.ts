import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

import { ProductEntity } from "../../products/entities/product.entity";
export class CategoryDTO extends BaseDTO{
    
    @IsNotEmpty()
    categoryName!: string;

    @IsNotEmpty()
    products!: ProductEntity;
}