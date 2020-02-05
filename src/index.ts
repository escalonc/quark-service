import Server from './server';
import { conf } from './config/default';

const { manifest, options } = conf;
const server = new Server();

server.init(manifest, options);
