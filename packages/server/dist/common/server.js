import * as express from 'express';
let doServe = (method, handler, middleware) => {
    doServe = () => { throw new Error('Serve should only be called once'); };
    const service = express();
    service[method]('/', handler, middleware);
    service.get('/_health', (_, resp) => resp.sendStatus(200));
    service.listen(8080);
};
const serve = (method) => {
    return (handler, middleware) => doServe(method, handler, middleware);
};
export const Server = {
    get: serve('get'),
    post: serve('post'),
};
