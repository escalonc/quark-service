import fg from 'fast-glob';
import { ServerRoute } from '@hapi/hapi';

const paths = fg.sync('**/*Route.{js,ts}', { dot: true });
const routeModules: ServerRoute[] = paths
  .map(path => require(`${process.cwd()}/${path}`).default)
  .flat();

export default () => routeModules;
