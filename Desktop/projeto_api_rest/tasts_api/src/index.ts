import "reflect-metadata";
import { createConnection } from 'typeorm';
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

const app = express()
createConnection()

app.use(bodyParser.json())
app.use(routes)

app.listen(3333)