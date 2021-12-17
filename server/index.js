const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const corsMiddleWare = require('./middleware/cors.middleware')

const app = express();
const PORT = config.get('serverPort');

app.use(corsMiddleWare)
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

const startServer = async () => {
	try {
		await mongoose.connect(config.get('mongoURI'));

		app.listen(PORT, () => {
			console.log('Server has started on port', PORT);
		})
	} catch (error) {

	}
}

startServer();

/*
{
	 "email": "asd@ASd.ru",
	 "password": "asdfg",
	 "userName": "Semion"
}
http://localhost:5000/api/auth/get

*/