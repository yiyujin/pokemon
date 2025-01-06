import dotenv from 'dotenv'
dotenv.config();
dotenv.config({ path: './.env.local' });

export const TOKEN = process.env.TOKEN;
export const DATABASE_ID = process.env.DATABASE_ID;