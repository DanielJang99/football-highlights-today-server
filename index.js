const express = require("express");
const port = process.env.PORT;
require("./db/mongoose");
const userRouter = require("./routers/user");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
});
