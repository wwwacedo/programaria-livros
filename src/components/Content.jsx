import { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components';

import livros from '../../server/livros.json';

export default function Content() {
	// const [repositories, setRepositories] = useState([])
	const [repositories, setRepositories] = useState(livros)
	const [autora, setAutora] = useState('')
	const [nome, setNome] = useState('')
	const [imagem, setImagem] = useState('')
	const [categoria, setCategoria] = useState('')
	const [success, setSuccess] = useState(false)
	// const baseURL = 'https://back-end-6c7c.onrender.com/mulheres'

	// GET
	// async function getData() {
	// 	const response = await Axios.get(baseURL)
	// 	setRepositories(response.data)
	// }

	// POST
	// async function sendData() {
	// 	await Axios.post(baseURL, {
	// 		autora: autora,
	// 		nome: nome,
	// 		imagem: imagem,
	// 		categoria: categoria
	// 	})
	// }

	// useEffect(() => {
	// 	getData()
	// }, [])

	function handleInputValueAutora(event) {
		setAutora(event.target.value)
	}

	function handleInputValueNome(event) {
		setNome(event.target.value)
	}

	function handleInputValueImagem(event) {
		setImagem(event.target.value)
	}

	function handleInputValueCategoria(event) {
		setCategoria(event.target.value)
	}

	function handleCreateMessage(event) {
		event.preventDefault()

		console.log('mensagem enviada', autora, nome, imagem, categoria)

		// sendData()
		// getData()

		setSuccess(true)
		setAutora('')
		setNome('')
		setImagem('')
		setCategoria('')
	}

	return (
		<>

			<ProjectContainer>
				<div className="projectsContainer">
					<div className="cardsRepoContainer">
						{repositories.map((repo) => {
							return (
								<CardRepo key={repo._id}>
									<div className="cardImgContainer">
										<img className="cardRepoImage" src={repo.imagem} />
									</div>
									{console.log(repo.imagem)}
									<div className="cardTextContainer">
										<p className="cardRepoNome nome">{repo.nome}</p>
										<p className="cardRepoAutora autora">{repo.autora}</p>
										<p className="cardRepoQuote">{repo.categoria}</p>
									</div>

								</CardRepo>
							)
						})}
					</div>
				</div>
			</ProjectContainer>

			{/* FORMULÁRIO */}

			<FormContainer >
				<h2>Cadastre um livro:</h2>
				<form onSubmit={handleCreateMessage}>
					<input
						onChange={handleInputValueNome}
						placeholder="Digite o nome do livro"
						value={nome}
					/>
					<input
						onChange={handleInputValueAutora}
						placeholder="Digite o nome da rainha escritora"
						value={autora}
					/>
					<textarea
						onChange={handleInputValueImagem}
						placeholder="Digite o link da imagem do livro"
						value={imagem}
					/>
					<input
						onChange={handleInputValueCategoria}
						placeholder="Digite a categoria do livro"
						value={categoria}
					/>
					<button type="submit">Enviar mensagem</button>

					{success && <p>Cadastro realizado com sucesso.</p>}
				</form>
			</FormContainer>
		</>
	)
}

const ProjectContainer = styled.div`
	padding: 2rem 0 4rem;
	width: 100%;
  	color: #686AAC;
  	text-align: center;	
	.projectsContainer{
		width: 100%;
  		color: #686AAC;
  		text-align: center;
  		padding-top: 2rem;
		.cardsRepoContainer{
			display: flex;
  			justify-content: center;
  			align-items: center;
  			flex-wrap: wrap;
  			margin: 0 auto;
  			gap: 3rem;
  			padding: 2rem;
		}
	}
`
const CardRepo = styled.div`
	background-color: #464555;
  	width: 30%;
  	min-width: 300px;
	min-height: 450px;
  	padding: 2rem;
  	border-radius: 4px;
  	text-align: center;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
	gap: 2rem;

	.cardImgContainer {
		display: flex;
		justify-content: center;
		align-items: center;
  		width: 60%;
  		height: 80%;
		  
		.cardRepoImage {
			border-radius: .5rem;
  			width: 60%;
			min-width: 150px;
			object-fit: cover;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		}
	}
	.cardTextContainer {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		.cardRepoNome {
			color: #fff;
			font-size: 1.2rem;
			max-width: 80%;
		}
		.cardRepoAutora {
			color: #7E87F1;
			font-size: 1.2rem;
			max-width: 80%;
		}
		.cardRepoQuote {
			color: #fff;
			font-style: italic;
			font-weight: lighter;
		}
	}
`


const FormContainer = styled.div`
	background-color: #464555;
	padding: 4rem 0;
	h2 {
  		font-size: 2rem;
  		color: #F9F8FF;
  		text-align:center
	}
	form {
		margin: 0 auto;
  		border-radius: 4px;
  		width: 80%;
  		height: 400px;
  		display: flex;
  		justify-content: center;
 		align-items: center;
  		flex-direction: column;
		input {
			width: 80%;
  			padding: 12px 32px;
  			border: 1px solid #ccc;
  			border-radius: 4px;
  			resize: vertical;
  			margin-bottom: 1rem;
		}
		textarea { 
			width: 80%;
  			padding: 12px 32px;
  			border: 1px solid #ccc;
  			border-radius: 4px;
  			resize: vertical;
  			margin-bottom: 1rem;
		}
		button {
			background-color: #4CAF50;
  			border: none;
  			color: white;
  			padding: 12px 32px;
  			text-align: center;
  			text-decoration: none;
  			display: inline-block;
  			font-size: 16px;
  			margin-top: 1rem;
  			width: 80%;
  			border-radius: 4px;
  			cursor: pointer;
				:hover {
  					background-color: #4CA;
				}
		}
	}
`