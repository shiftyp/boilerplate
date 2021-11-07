import { Server } from '../common/server'
import { DataCollection } from '../common/data'
import * as bodyParser from 'body-parser'
import { Data } from '@app/types'

const handler = async (res, resp) => {
  const collection = await DataCollection;

  try {
    const data: Data[] = await collection.find({}).toArray() as Data[]

    return resp.send(JSON.stringify(data))
  } catch (e) {
    return resp.sendStatus(500)
  }
}

export default handler

Server.get(handler, [bodyParser.json()])

