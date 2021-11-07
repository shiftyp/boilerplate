import { Server } from '../common/server'
import { Database, DataCollection } from '../common/data'
import bodyParser = require('body-parser')
import { Data } from '@app/types/data'

const handler = async (res, resp) => {
  const collection = await DataCollection;
  const { value } = res.body as Data;

  if (!value) {
    return resp.sendStatus(400)
  }

  try {
    await collection.insert([{ value }], {}, () => {})

    return resp.sendStatus(200)
  } catch (e) {
    return resp.sendStatus(500)
  }
}

export default handler

Server.post(handler, [bodyParser.json()])

