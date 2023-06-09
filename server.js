import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import authController from "./controllers/auth-controller.js";
import userController from "./controllers/user-controller.js";
import reviewController from "./controllers/review-controller.js";
// import memeController from "./controllers/meme-controller.js";
// import commentController from "./controllers/comment-controller.js";
const CONNECTION_STRING = "mongodb+srv://admin:123@cluster0.4qmfppy.mongodb.net/webdev?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING)

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(
  session({
    secret: "SECRETO",
    cookie: { secure: false },
  })
);
app.use(express.json());
authController(app);
userController(app);
reviewController(app);

app.get("/", (request, response) => {
  response.send("Welcome to WebDev");
});

app.listen(process.env.PORT || 4000);