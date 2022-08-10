import * as dotenv from 'dotenv';
import { ConnectionOptions, DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';


export abstract class ConfigServer{
    constructor(){
        const nodeNameenv = this.createPathEnv(this.nodeEnv)
        dotenv.config({
            path: nodeNameenv,
        }) 
    }

    public getEnvironment(k: string): string | undefined{
        return process.env[k] //process.env['PORT']
    }

    public getNumberEnv(k: string): number{
        return Number(this.getEnvironment(k));
    }

    public get nodeEnv(): string {
        return this.getEnvironment('NODE_ENV')?.trim() || '';
    }

    public createPathEnv(path: string): string{
        const arrEnv: Array<string> = ['env']

        if(path.length > 0){ // production.release -> [production, release]
            const stringToArray = path.split('.') // Separamos el array por puntos
            arrEnv.unshift(...stringToArray)
        }
         
        return '.' + arrEnv.join('.')
    }

    public get typeORMConfig(): ConnectionOptions{
        return {
            type: "mysql",
            host: this.getEnvironment('DB_HOST'),
            port: this.getNumberEnv('DB_PORT'),
            database: this.getEnvironment('DB_DATABASE'),
            username: this.getEnvironment('DB_USER'),
            password: this.getEnvironment('DB_PASSWORD'),
            entities: [__dirname + "../../**/*.entity{.ts,.js}"],
            migrations: [__dirname + "../../migrations/*{.ts,.js}"],
            synchronize: true,
            logging: false,
            namingStrategy: new SnakeNamingStrategy(),
        }
    }

    async dbConnect(): Promise<DataSource>{
        return await new DataSource(this.typeORMConfig).initialize();
    }
}


