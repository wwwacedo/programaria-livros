import mongoose from "mongoose";

const livroSchema = mongoose.Schema({
	autora: {type: String, required: true},
	nome: {type: String, required: true},
	imagemCapa: {type: String, required: true},
	categoria: {type: String, required: true},
});

export default mongoose.model("livro", livroSchema);