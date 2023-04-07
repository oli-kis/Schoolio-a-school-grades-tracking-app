//Inspired by: https://www.youtube.com/watch?v=l8WPWK9mS5M

import cors from "cors";

import express from "express";
import bodyParser from "body-Parser";

import subjectRoutes from "./routes/subjects.js";

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

app.use("/subject", subjectRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Homepage.");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
