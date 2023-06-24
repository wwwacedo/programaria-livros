/* eslint-disable react/prop-types */
// import styled from '../styles/header.module.css'
import styled from 'styled-components';
import imagem from "../assets/header.svg";

export default function Header() {
	return (
		<MyHeader>
				<h1>Estante Virtual</h1>
				<h2>Conheça livros incríveis escritos por mulheres!</h2>
				<img src={imagem} alt="" />
		</MyHeader>
	)
}

const MyHeader = styled.header`
	padding: 5rem;
  	background: #686AAC;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
	gap: 2rem;
	text-align: center;
	letter-spacing: .15rem;

	h1 {
		color: #fff;
  		font-size: 3rem;
		padding-bottom: 1rem;
	}

	h2 {
		color: #fff;
	  	font-size: 1.6rem;
	  	font-weight: lighter;
		font-weight: 300;
	}

	img {
		padding-top: 2rem;
		width: 25%;
	}

	@media(max-width: 765px) {
	  img {
	    width: 100%;
	  }
	}
`

