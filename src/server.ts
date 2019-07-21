import 'dotenv/config';

import App from './app';
import GetController from './controllers/get/get.controller';
import MountainsController from './controllers/mountains/mountains.controller';

const app = new App(
  [new GetController(), new MountainsController()],
  process.env.PORT
);

app.listen();
