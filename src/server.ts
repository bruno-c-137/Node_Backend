import Fastify from "fastify";
import { Routes } from "./routes";
import Cors from "@fastify/cors";

const server = Fastify({ logger: true });

const Start = async () => {
  await server.register(Cors);
  await server.register(Routes);
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3333;
  try {
    await server.listen({ host: "0.0.0.0", port: port });
  } catch (err) {
    process.exit(1);
  }
};

Start();
