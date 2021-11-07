var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MongoClient } from 'mongodb';
const connectData = (host, user, password) => __awaiter(void 0, void 0, void 0, function* () {
    const client = new MongoClient(`mongodb://${user}:${password}@${host}`);
    yield client.connect();
    return client.db('app');
});
export const Database = connectData(process.env.MONGO_HOST, process.env.MONGO_USER, process.env.MONGO_PASSWORD);
export const DataCollection = (() => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield Database;
    return db.collection('data');
}))();
