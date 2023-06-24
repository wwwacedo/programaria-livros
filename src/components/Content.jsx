import { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components';

export default function Content() {
	const MEUS_LIVROS = 8
	const [repositories, setRepositories] = useState([])
	const [autora, setAutora] = useState('')
	const [nome, setNome] = useState('')
	const [imagem, setImagem] = useState('')
	const [categoria, setCategoria] = useState('')
	const [successMessage, setSuccessMessage] = useState('')
	const baseURL = 'https://programaria-livros-backend.onrender.com/livros'
	const [loading, setLoading] = useState(true)

	// GET
	async function getData() {
		const response = await Axios.get(baseURL)
		setRepositories(response.data)
		setLoading(false)
	}

	// POST
	async function sendData() {
		const response = await Axios.post(baseURL, {
			autora: autora,
			nome: nome,
			imagem: imagem,
			categoria: categoria
		})
		response.status && setSuccessMessage('Cadastro realizado com sucesso.')
	}

	// DELETE
	async function deleteData(id) {
		const response = await Axios.delete(`${baseURL}/${id}`)
		alert(`${response.data.mensagem}`)
	}

	useEffect(() => {
		!repositories ? console.log('ainda não temos livros cadastrados') : "";
		getData()
	}, [repositories])

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

	function createLoader() {
		return (
			<Loader>
				<div className="loader"></div>
			</Loader>
		)
	}

	function handleCreateMessage(event) {
		event.preventDefault()

		console.log('mensagem enviada', autora, nome, imagem, categoria)

		sendData()
		getData()

		setAutora('')
		setNome('')
		setImagem('')
		setCategoria('')
		setTimeout(() => {
			setSuccessMessage('')
		}, 4000)
	}

	return (
		<>
			{loading
				? createLoader()
				: <ProjectContainer>
					<div className="projectsContainer">
						<div className="cardsRepoContainer">
							{repositories.map((repo, index) => {
								return (
									<CardRepo key={repo._id}>
										<div className="cardImgContainer">
											<img className="cardRepoImage" src={repo.imagem} />
										</div>
										<div className="cardTextContainer">
											<p className="cardRepoNome nome">{repo.nome}</p>
											<p className="cardRepoAutora autora">{repo.autora}</p>
											<p className="cardRepoQuote">{repo.categoria}</p>
										</div>
										{index > MEUS_LIVROS - 1 && <button onClick={() => deleteData(repo._id)}>Apagar</button>}

									</CardRepo>
								)
							})}
						</div>
					</div>
				</ProjectContainer>
			}


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
					<p>{successMessage}</p>

				</form>
			</FormContainer>
		</>
	)
}

const Loader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 150px;	

	.loader {
	border: 12px solid #f3f3f3;
	border-top: 12px solid #686AAC; 
	border-radius: 50%;
	width: 60px;
	height: 60px;
	animation: spin 2s linear infinite;
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
}
`

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
	button {
		background-color: #EF6269;
  		border: none;
  		color: white;
  		padding: 8px 16px;
  		font-size: 16px;
  		margin-top: 1rem;
  		border-radius: 3px;
  		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}

	button:hover {
		  background-color: #000000;
	}
`

const FormContainer = styled.div`
	background-color: #464555;
	padding: 4rem 0;
	h2 {
  		font-size: 2rem;
  		color: #F9F8FF;
  		text-align: center;
		padding-bottom: 1rem;
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
		gap: .5rem;
		input {
			width: 80%;
  			padding: 12px 32px;
  			border: 1px solid #ccc;
  			border-radius: 4px;
  			resize: vertical;
  			margin-bottom: 1rem;
			outline: none;
			background-color: #3B3B3B;
		}
		textarea { 
			width: 80%;
  			padding: 12px 32px;
  			border: 1px solid #ccc;
  			border-radius: 4px;
  			resize: vertical;
  			margin-bottom: 1rem;
			outline: none;
			background-color: #3B3B3B;
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
  					background-color: #4CAF50;
				}
		}
		p {
			height: 1rem;
		}
	}
`
