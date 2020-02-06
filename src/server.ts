import Glue, { Manifest, Options } from '@hapi/glue';
import routes from './routes';

interface ServerConfiguration {
  init(manifest: Manifest, options?: Options): void;
}

class HapiServer implements ServerConfiguration {
  async init(manifest: Manifest, options?: Options): Promise<void> {
    try {
      const Server = await Glue.compose(manifest, options);

      Server.route(routes());

      await Server.start();

      console.log('Server started 🚀', Server.info.uri);
    } catch (e) {
      console.log('An error has happened!');
      console.log(e);
      process.exit(1);
    }
  }
}

export default HapiServer;
