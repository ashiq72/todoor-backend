import express, { Request, Response } from "express";
import cors from "cors";
import router from "./allRoutes";
const app = express();

app.use(express.json());
app.use(cors());

// app.use("/api/v1", );

app.get("/", async (req: Request, res: Response) => {
  var text = "Hello world!!!";
  res.send(text);
});

//applications routes
app.use("/api/v1", router);

export default app;
