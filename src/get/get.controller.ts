import * as express from 'express';

interface Greeting {
  greeting: string;
}

class GetController {
  public path = '/get';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(this.path, this.getHello);
    this.router.post(this.path, this.respondToGreeting);
  }

  private getHello(req: express.Request, res: express.Response): void {
    res.send('Hello for the first time');
  }

  private respondToGreeting(req: express.Request, res: express.Response): void {
    const { greeting }: Greeting = req.body;
    res.json(`${greeting} right back at you!`);
  }
}

export default GetController;
