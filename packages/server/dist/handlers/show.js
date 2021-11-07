var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Server } from '../common/server';
import { Database } from '../common/data';
import * as bodyParser from 'body-parser';
const handler = (res, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield Database;
    try {
        const data = yield db.collection('data').find({}).toArray();
        return resp.send(JSON.stringify(data));
    }
    catch (e) {
        return resp.sendStatus(500);
    }
});
export default handler;
Server.get(handler, [bodyParser.json()]);
