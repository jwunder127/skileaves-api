import { IDatabase, IMain } from 'pg-promise';

import Mountain from '../../controllers/mountain/mountain.interface';

export class MountainsRepository {
  private db: IDatabase<any>;

  constructor(db: any) {
    this.db = db;
  }

  public async getAll(): Promise<Mountain[]> {
    return await this.db.any('SELECT * FROM mountains');
  }

  public async getAllOperating(): Promise<Mountain[]> {
    return await this.db.any('SELECT * FROM mountains WHERE operating_status = $1', 'Operating');
  }

  public async getOneByID(id: number) {
    return await this.db.oneOrNone('SELECT * FROM mountains WHERE id = $1', id);
  }
}
