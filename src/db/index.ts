import { IMain, IDatabase, IOptions } from 'pg-promise';
import * as pgPromise from 'pg-promise';

import { IExtensions, MountainsRepository } from './repos';

const dbConfig = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: '',
    password: '',
};

const initOptions: IOptions<IExtensions> = {
    extend(obj: IExtensions) {
        obj.mountains = new MountainsRepository(obj);
    },
};

const pgp: IMain = pgPromise(initOptions);

const db = <IDatabase<IExtensions> & IExtensions>pgp(dbConfig);

export = db;
