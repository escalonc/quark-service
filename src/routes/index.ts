import fg from 'fast-glob';
import { ServerRoute } from '@hapi/hapi';

let routes: ServerRoute[] = [];
let route = null;

const paths = fg.sync('**/*Route.{js,ts}', { dot: true });
const modules = paths.map(path => {
  route = require(`${process.cwd()}/${path}`).default;

  return route;
});

routes = modules.flat();

export default () => routes;
