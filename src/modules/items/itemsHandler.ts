import { ResponseToolkit, Request } from '@hapi/hapi';

const all = (request: Request, h: ResponseToolkit) => {
  console.log(request);
  // below you can see the query element from request from which you can have access to payload and query
  // const { query } = request;
  // const { from, limit } = query;

  let statusCode = 500;
  let data = {};

  try {
    // call to some service is mocked here this must be a async method that awaits service call or method
    statusCode = 200;
    data = { host: request.info.hostname, date: new Date() };
  } catch (err) {
    data = err;
  }

  return h
    .response({
      data,
    })
    .code(statusCode);
};

export { all };
