import { Server } from '../common/server'
import { Database } from '../common/data'
import bodyParser = require('body-parser')
import { Data } from '@app/types/data';

const handler = async (res, resp) => {
  const db = await Database;

  try {
    const data: Data[] = await db.collection('data').find({}).toArray() as Data[]

    return resp.send(JSON.stringify(data))
  } catch (e) {
    return resp.sendStatus(500)
  }
}

export default handler

Server.get(handler, [bodyParser.json()])

