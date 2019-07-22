import 'dotenv/config';

import App from './app';
import GetController from './controllers/get/get.controller';
import RootController from './controllers/root/root.controller';
import MountainsController from './controllers/mountains/mountains.controller';

import ForecastService from './services/forecast/forecast.service';

const app = new App(
    [new GetController(), new RootController(), new MountainsController(new ForecastService())],
    process.env.PORT
);

app.listen();
