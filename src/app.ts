import * as express from 'express';
import * as bodyParser from 'body-parser';

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers, port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddleware();
    this.initializeControllers(controllers);
  }

  private initializeMiddleware(): void {
    console.log('using body parser');
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers): void {
    console.log('initializing controllers');
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }
}

export default App;
