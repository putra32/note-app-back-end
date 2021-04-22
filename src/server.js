import Hapi from '@hapi/hapi';
import router from './router';
import 'colors';

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors:{
        origin: ['*']
      }
    }
  });

  server.route(router);

  await server.start();
  console.log(`Sever berjalan pada ${server.info.uri}`.gray.bgGreen);
};

export default init;
