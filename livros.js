import express from 'express';
import cors from 'cors';
import conectaBancoDeDados from './bancoDeDados.js';
import Livro from './livroModel.js'; 

const PORTA = 3333;
const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

conectaBancoDeDados();

function mostraPorta() {
	console.log(`Servidor rodando na porta ${PORTA}`);
}

//GET
async function mostraLivros(req, res) {
	try {
		const livrosVindosDoBancoDeDados = await Livro.find();
		res.status(200).json(livrosVindosDoBancoDeDados);
	} catch (erro) {
		console.log(erro);
	}
}

//POST
async function criaLivro(req, res) {
	const novoLivro = new Livro({
		nome: req.body.nome,
		autora: req.body.autora,
		imagem: req.body.imagem,
		categoria: req.body.categoria
	});
	try{
		const livroCriado = await novoLivro.save();
		res.status(201).json(livroCriado);
	} catch (erro) {
		console.log(erro);
	}
}

//PATCH
async function atualizaLivro(req, res) {
	try{
		const livroEncontrado = await Livro.findById(req.params.id);
		if (req.body.nome) livroEncontrado.nome = req.body.nome;
		if (req.body.autora) livroEncontrado.autora = req.body.autora;
		if (req.body.imagem) livroEncontrado.imagem = req.body.imagem;
		if (req.body.categoria) livroEncontrado.categoria = req.body.categoria;
		const livroAtualizado = await livroEncontrado.save();
		res.status(200).json(livroAtualizado);
	}catch(erro){
		console.log(erro);
	}	
}

//DELETE
async function deletaLivro(req, res) { 
	try {
		const livroDeletado = await Livro.findByIdAndDelete(req.params.id);
		res.json({ mensagem: `O livro "${livroDeletado.nome}", de ${livroDeletado.autora}, foi deletado com sucesso!`});	
	} catch(erro) {
		console.log(erro);
	}	
}

// ROTAS
app.use(router.get('/livros', mostraLivros));
app.use(router.post('/livros', criaLivro));
app.use(router.patch('/livros/:id', atualizaLivro));
app.use(router.delete('/livros/:id', deletaLivro));

app.listen(PORTA, mostraPorta);