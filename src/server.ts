import "reflect-metadata";
import * as dotenv from "dotenv";
import express from "express";

// eslint-disable-next-line import/no-extraneous-dependencies

import "./database";

import "./shared/container";

const app = express();
dotenv.config();

app.listen(3333, () => console.log("Server is Running on port 3333!"));
