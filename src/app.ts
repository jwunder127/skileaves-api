import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';

import Controller from 'interfaces/controller.inferface';

class App {
    public app: express.Application;
    public port: string | number;

    constructor(controllers: Controller[], port: string) {
        this.app = express();
        this.port = port;

        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }

    private initializeMiddleware(): void {
        this.app.use(
            bodyParser.urlencoded({
                extended: true,
            })
        );
        this.app.use(bodyParser.json());
        this.app.use(
            expressWinston.logger({
                transports: [new winston.transports.Console()],
                format: winston.format.combine(winston.format.colorize(), winston.format.json()),
            })
        );
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach((controller: Controller) => {
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
