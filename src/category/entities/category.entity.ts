import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base_entity";
import { ProductEntity } from "../../products/entities/product.entity";

@Entity({
    name: "category"
})
export class CategoryEntity extends BaseEntity{

    @Column()
    categoryName!: string;

    @OneToMany(()=> ProductEntity, (product)=> product.category)
    products!: ProductEntity;

}