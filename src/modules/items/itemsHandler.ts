import { ResponseToolkit } from '@hapi/hapi';

const all = (request: object, h: ResponseToolkit) => {
  console.log(request);
  // below you can see the query element from request from which you can have access to payload and query
  // const { query } = request;
  // const { from, limit } = query;

  let statusCode = 500;
  let code = 0;
  let message = '';
  let content = {};

  try {
    // call to some service is mocked here this must be a async method that awaits service call or method
    statusCode = 200;
    code = 1;
    message = 'some message';
    content = [
      {
        name: 'pepe',
        level: 9999,
        type: 'god',
      },
      {
        name: 'normie',
        level: 0,
        type: 'snowflake',
      },
    ];
  } catch (err) {
    message = `Items handler "all" operation was unsuccessful: ${err.message}`;
    content = err;
  }

  return h
    .response({
      statusCode,
      code,
      message,
      content,
    })
    .code(statusCode);
};

export { all };
