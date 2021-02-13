require("dotenv").config();

const bearerToken =require("express-bearer-token")

const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const app = express();

const userRouter = require("./api/routes/userRoutes")

const allowedOrigins = [
	"https://localhost:8000"
];
const corsOptions = {
	origin: (origin, cb) => {
		if (allowedOrigins.includes(origin) !== -1) {
			cb(null, true);
		} else {
			cb(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
	optionsSuccessStatus: 200,
	allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cookieParser())
app.use(logger("dev"));
app.use(cors(corsOptions));
app.set("trust proxy", 1);

app.use(bearerToken());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/hello", (req, res) => {
	res.status(200).json("hello world");
});

app.use("/api/user", userRouter)

app.use((req, res) => {
	res.status(404).send({ url: "I'm sorry, " + req.originalUrl + " not found"});
})
module.exports = app;
