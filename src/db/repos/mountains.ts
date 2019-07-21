import { IDatabase, IMain } from 'pg-promise';

import Mountain from '../../controllers/mountain/mountain.interface';

export class MountainsRepository {
  private db: IDatabase<any>;

  constructor(db: any) {
    this.db = db;
  }

  async getAll(): Promise<Mountain[]> {
    return this.db.any('SELECT * FROM mountains');
  }

  async getOneByID(id: number) {
    return this.db.oneOrNone('SELECT * FROM mountains WHERE id = $1', id);
  }
}
