import { sql } from "./db";

// sql`DROP TABLE IF EXISTS videos;`.then(() => {console.log("table apagado");
// })

sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INT
)
`.then(() => {
  console.log("table criada");
});
