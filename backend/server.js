import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(express.json());

// CORS for frontend domain
app.use(
	cors({
		origin: "https://mern-login-frontend-h7tp.onrender.com",
		credentials: true,
	})
);

app.use("/api/users", authRoutes);

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
});
