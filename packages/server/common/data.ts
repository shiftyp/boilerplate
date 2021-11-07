import { MongoClient } from 'mongodb';

const connectData = async (host: string, user: string, password: string) => {
  const client = new MongoClient(`mongodb://${user}:${password}@${host}`)

  await client.connect()

  return client.db('app')
};

export const Database = connectData(
  process.env.MONGO_HOST,
  process.env.MONGO_USER,
  process.env.MONGO_PASSWORD
);

export const DataCollection = (async () => {
  const db = await Database;
  return db.collection('data')
})()
