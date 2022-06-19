import { Column, Entity, OneToOne } from "typeorm";
import { ExclusionMetadata } from "typeorm/metadata/ExclusionMetadata";
import { BaseEntity } from "../../config/base_entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";

@Entity({
    name: "user"
})
export class UserEntity extends BaseEntity{

    @Column()
    username!: string;

    @Column({ length: 1000 })
    name!: string;

    @Column()
    lastname!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    city!: string;

    @Column()
    province!: string;

    @OneToOne(()=> CustomerEntity, (customer) => customer.user)
    customer!: CustomerEntity

}