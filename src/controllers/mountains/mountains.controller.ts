import * as express from 'express';

import db = require('../../db');
import Mountain from '../mountain/mountain.interface';

class MountainsController {
    public path = '/mountains';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes(): void {
        this.router.get(this.path, this.getMountains);
        this.router.get(`${this.path}/operating`, this.getOperatingMountains);
    }

    private getMountains(req: express.Request, res: express.Response): void {
        db.mountains
            .getAll()
            .then((mountains: Mountain[]) => {
                res.json(mountains);
                console.log('mountains.length:', mountains.length);
            })
            .catch(console.error);
    }

    private getOperatingMountains(req: express.Request, res: express.Response): void {
        db.mountains
            .getAllOperating()
            .then((mountains: Mountain[]) => {
                res.json(mountains);
                console.log('mountains.length:', mountains.length);
            })
            .catch(console.error);
    }
}

export default MountainsController;
