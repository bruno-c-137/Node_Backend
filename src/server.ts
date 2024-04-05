import Fastify from "fastify";
import { Routes } from "./routes";
import Cors from "@fastify/cors";

const server = Fastify({ logger: true });

const Start = async () => {
  await server.register(Cors);
  await server.register(Routes);

  try {
    await server.listen({ port: 3333 });
  } catch (err) {
    process.exit(1);
  }
};

Start();
