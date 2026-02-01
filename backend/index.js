import express from "express";
import mongoose from "mongoose";
import brandsRoute from "./routes/brandsRoute.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

app.use(express.json());

// Middleware for handling CORS policy
app.use(
  cors({
    origin: "http://localhost:3000",
    method: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.get("/", (request, response) => {
  return response.status(234).send("Welcome to project square - accenture");
});

// Serve featured brands images stored in server: e.g: http://localhost:8080/uploads/1697286942995visa-black.png, this will be referenced in reactjs
app.use("/uploads", express.static("uploads"));
app.use("/featured-brands", brandsRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("App connected to the database successfully");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
