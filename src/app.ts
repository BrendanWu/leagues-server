import express from "express";
import mongoose from "mongoose";
import { MongoURI } from "./config/db";
import config from "./config/config";
import * as http from "http";

import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import cors from "cors";

import profile from "./routes/profile.routes";
import cron from "node-cron";
import { saveListings } from "./controllers/listing.controller";
// import scrape from "./controllers/scraper.controller";
import mailRoutes from "./routes/lifted-email.routes";
import listings from "./routes/listing.routes";
import sites from "./routes/sites.routes";

dotenv.config();
const app = express();
let server = http.createServer(app);

mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected " + MongoURI))
  .catch((err: string) => console.log(err));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", profile);
app.use("/listings", listings);
app.use("/site", sites);

//route integrated in client (see modification process)
app.use("/api/mail", mailRoutes);

server.listen(process.env.PORT || 5000, () => {
  console.info("Server started on port %s.", process.env.PORT || 5000);
});
