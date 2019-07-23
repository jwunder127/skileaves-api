import * as express from 'express';

class RootController {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  private intializeRoutes(): void {
    this.router.get(this.path, this.getSplashPage);
  }

  private getSplashPage(req: express.Request, res: express.Response): void {
    // TODO: add an html page complete with links that allow the users to click the endpoints
    res.send('Welcome to the Skileaves API');
  }
}

export default RootController;
