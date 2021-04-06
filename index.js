const express = require("express");
const path = require("path");
const port = process.env.PORT;
const dev = process.env.NODE_ENV !== "production";
require("./db/mongoose");
const userRouter = require("./routers/user");
const auth = require("./middleware/auth");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
});
