import { IMain, IDatabase, IOptions } from 'pg-promise';
import * as pgPromise from 'pg-promise';

import { IExtensions, MountainsRepository } from './repos';

const dbConnectionString = process.env.DATABASE_URL;

const initOptions: IOptions<IExtensions> = {
    extend(obj: IExtensions) {
        obj.mountains = new MountainsRepository(obj);
    },
};

const pgp: IMain = pgPromise(initOptions);

const db = <IDatabase<IExtensions> & IExtensions>pgp(dbConnectionString);

export default db;
