import { Server, Request, ResponseToolkit } from "@hapi/hapi";

export async function init() {
  const server = new Server({
    port: 3000,
    host: "localhost"
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (_request: Request, _header: ResponseToolkit) => {
      return "Hello World!";
    }
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
}
