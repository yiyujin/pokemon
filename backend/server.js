import { Client } from "@notionhq/client";
import { TOKEN, DATABASE_ID } from "./config.js";

import express from 'express';
const app = express();

const PORT = 8000;

app.listen(PORT, function(){
    console.log(`listening to ${PORT}`);
})

//retrieve a database
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

//Query a database
export async function queryADatabase() {
    const notion = new Client({ auth: TOKEN });
  
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
    });
  
    return response.results;
  }
  
  app.post("/api/query-a-database", async (req, res) => {
    try {
      const results = await queryADatabase();
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });