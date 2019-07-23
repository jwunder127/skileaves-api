import * as express from 'express';

import db from '../../db/index';
import Mountain from '../mountain/mountain.interface';
import ForecastService from '../../services/forecast/forecast.service';

const forecastService = new ForecastService();

class MountainsController {
  public path = '/mountains';
  public router = express.Router();

  constructor(private forecastService: ForecastService) {
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.get(this.path, this.getMountains);
    this.router.get(`${this.path}/operating`, this.getOperatingMountains);
    this.router.get(`${this.path}/forecast/:lat/:long`, this.getMountainForecast);
  }

  private async getMountains(req: express.Request, res: express.Response): Promise<void> {
    try {
      const mountains: Mountain[] = await db.mountains.getAll();
      res.json(mountains);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  private async getMountainForecast(req: express.Request, res: express.Response): Promise<void> {
    try {
      const forecast = await forecastService.getForecastByCoordinates(req.params.lat, req.params.long);
      res.json(forecast);
    } catch (e) {
      res.json(e);
    }
  }

  private async getOperatingMountains(req: express.Request, res: express.Response): Promise<void> {
    try {
      const mountains: Mountain[] = await db.mountains.getAllOperating();
      res.json(mountains);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export default MountainsController;
