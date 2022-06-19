import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base_entity";
import { ProductEntity } from "../../products/entities/product.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { UserEntity } from "../../user/entities/user.entity";

@Entity({
    name: "customer"
})
export class CategoryEntity extends BaseEntity{

    @Column()
    categoryName!: string;

    @OneToMany(()=> ProductEntity, (product)=> product.category)
    products!: ProductEntity;

}