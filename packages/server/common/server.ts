import * as express from 'express'

let doServe = (method: 'get' | 'post', handler: express.Handler, middleware?: express.RequestHandler[])  => {
  doServe = () => { throw new Error('Serve should only be called once') } 
  
  const service = express()

  service[method]('/', handler, middleware)

  service.get('/_health', (_, resp) => resp.sendStatus(200))

  service.listen(8080)
}  

const serve = (method) => { 
 return (handler: express.Handler, middleware?: express.RequestHandler[]) => doServe(method, handler, middleware)
}

export const Server = {
  get: serve('get'),
  post: serve('post'),
}