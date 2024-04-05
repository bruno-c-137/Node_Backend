import { randomUUID } from "node:crypto";
import { sql } from "./db";

export class DatabasePostgres {
  async list(search: any = "") {
    return search
      ? await sql`select * from videos where title ilike ${"%" + search + "%"}`
      : await sql`select * from videos`;
  }
  async create(video: any) {
    const id = randomUUID();
    const { title, description, duration } = video;

    await sql`insert into videos (id, title, description, duration) VALUES (${id}, ${title}, ${description}, ${duration})`;
  }
  async update(id: any, video: any) {
    const { title, description, duration } = video;
    await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`;
  }
  async delete(id: any) {
    await sql`delete from videos WHERE id = ${id}`;
  }
}
