import "reflect-metadata";
import * as dotenv from "dotenv";
import express from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import swaggerUi from "swagger-ui-express";

// eslint-disable-next-line import/no-extraneous-dependencies
import "./database";

import "./shared/container";
import swaggerFile from "./swagger.json";

const app = express();
app.use(express.json());
dotenv.config();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333, () => console.log("Server is Running on port 3333!"));
