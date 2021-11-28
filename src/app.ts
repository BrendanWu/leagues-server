import express from "express";
import mongoose from "mongoose";
import { MongoURI } from "./config/db";
import * as http from "http";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import cors from "cors";
import profile from "./routes/profile.routes";
import mailRoutes from "./routes/lifted-email.routes";
import listings from "./routes/listing.routes";
import sites from "./routes/sites.routes";
import blogRoutes from "./routes/blog.routes";
import playgrounds from "./routes/playgrounds.routes";

dotenv.config();
const app = express();
let server = http.createServer(app);

let PORT = process.env.PORT || 5000;

mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected " + MongoURI))
  .catch((err: string) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.options("*", cors());


app.use("/", profile);
app.use("/listings", listings);
app.use("/site", sites);

app.use("/api/mail", mailRoutes);
app.use('/blog', blogRoutes)

app.use("/playgrounds", playgrounds);

server.listen(PORT, () => {

  console.info("Server started on port %s.", PORT);
});
