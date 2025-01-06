import { Client } from "@notionhq/client";
import { TOKEN, DATABASE_ID } from "./config.js";

import express from 'express';
const app = express();

const PORT = 8080;

app.listen(PORT, function(){
    console.log(`listening to ${PORT}`);

    console.log(TOKEN);
})

export async function retrieveADatabase(){
  const notion = new Client({ auth: TOKEN });

  const response = await notion.databases.retrieve({
    database_id: DATABASE_ID,
  });

  return response;
}

app.get("/api/retrieve-a-database", async (req, res) => {
    const results = await retrieveADatabase();
    res.json(results);
});