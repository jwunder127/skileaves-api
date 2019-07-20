import App from './app';
import GetController from './get/get.controller';

const app = new App([new GetController()], 3000);

app.listen();
