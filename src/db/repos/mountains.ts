import { IDatabase, IMain } from 'pg-promise';

import Mountain from '../../controllers/mountain/mountain.interface';

export class MountainsRepository {
    private db: IDatabase<any>;

    constructor(db: any) {
        this.db = db;
    }

    public getAll(): Promise<Mountain[]> {
        return this.db.any('SELECT * FROM mountains');
    }

    public getAllOperating(): Promise<Mountain[]> {
        return this.db.any('SELECT * FROM mountains WHERE operating_status = $1', 'Operating');
    }

    public getOneByID(id: number) {
        return this.db.oneOrNone('SELECT * FROM mountains WHERE id = $1', id);
    }
}
