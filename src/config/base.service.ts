import { EntityTarget, Repository } from "typeorm";
import { BaseEntity } from "./base_entity";
import { ConfigServer } from "./config";

export class BaseService<T extends BaseEntity> extends ConfigServer {
    public execRepository: Promise<Repository<T>>
    constructor (private getEntity: EntityTarget<T>) {
        super();
        this.execRepository = this.initRepository(getEntity)
    }

    async initRepository<T>(e: EntityTarget<T>): Promise<Repository<T>>{
        const getConn = await this.dbConnect();
        return getConn.getRepository(e);
    }
}