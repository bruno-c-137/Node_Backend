import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
// import { DatabaseMemory } from "./database-memory";
import { DatabasePostgres } from "./database-postgres";

export async function Routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post("/videos", (request: any, reply: FastifyReply) => {
    const { title, description, duration } = request.body as {
      title: string;
      description: string;
      duration: number;
    };
    if (
      typeof title !== "string" ||
      typeof description !== "string" ||
      typeof duration !== "number"
    ) {
      throw new Error("Preencha todos os campos");
    } else {
      console.log(duration);
      DatabasePostgres.prototype.create({
        title,
        description,
        duration,
      });
      return reply.status(201).send();
    }
  });
  fastify.get("/videos", (request: any, reply: FastifyReply) => {
    const search = request.query.search;

    const videos = DatabasePostgres.prototype.list(search);

    return videos;
  });

  fastify.put("/videos/:id", (request: any, reply: FastifyReply) => {
    const videoId = request.params.id;
    const { title, description, duration } = request.body as {
      title: string;
      description: string;
      duration: number;
    };
    if (
      typeof title !== "string" ||
      typeof description !== "string" ||
      typeof duration !== "number"
    ) {
      throw new Error("Preencha todos os campos");
    } else {
      console.log(duration);
      DatabasePostgres.prototype.update(videoId, {
        title,
        description,
        duration,
      });
      return reply.status(204).send();
    }
  });
  fastify.delete("/videos/:id", (request: any, reply: FastifyReply) => {
    const videoId = request.params.id;
    DatabasePostgres.prototype.delete(videoId);
    return reply.status(204).send();
  });
}
