import confidence from 'confidence';
import pack from '../../package.json';
import { Manifest, Options } from '@hapi/glue';

export enum Environments {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export interface AppConfiguration {
  env: string;
  appName: string;
}

export interface ServerConfiguration {
  manifest: Manifest;
  app: AppConfiguration;
  options: Options;
}

const conf: ServerConfiguration = {
  app: {
    env: process.env.NODE_ENV || Environments.Development,
    appName: pack.name,
  },
  manifest: {
    server: {
      port: 8001,
      host: 'localhost',
      routes: {
        cors: {
          origin: ['*'],
          credentials: true,
          additionalHeaders: ['cache-control', 'x-requested-with'],
        },
      },
    },
    register: {
      plugins: [
        { plugin: '@hapi/vision' },
        { plugin: '@hapi/inert' },
        {
          plugin: 'good',
          options: {
            ops: {
              interval: 15000,
            },
            reporters: {
              myConsoleReporter: [
                {
                  module: 'good-console',
                },
                'stdout',
              ],
            },
          },
        },
        {
          plugin: 'hapi-swagger',
          options: {
            info: {
              title: 'API Documentation',
              version: pack.version,
            },
            securityDefinitions: {
              jwt: {
                type: 'apiKey',
                name: 'Authorization',
                in: 'header',
              },
            },
            security: [{ jwt: [] }],
          },
        },
        { plugin: 'hapi-auth-bearer-token' },
      ],
    },
  },
  options: {
    relativeTo: __dirname,
  },
};

const store = new confidence.Store(conf);

const get = (key: string, opts: object = {}) => {
  const criteria = { ...conf, ...opts };

  return store.get(key, criteria);
};

export { get, conf };
