import mongoose from "mongoose";
import dotenv from "dotenv";
import process from "node:process";

dotenv.config();

export default async function conectaBancoDeDados() {
	try {
		console.log("Conexão com banco de dados iniciada...");
		await mongoose.connect(process.env.MONGO_URL);
		console.log("Conexão com banco de dados feita com sucesso!");
	} catch (erro) {
		console.log(erro);
	}	
}