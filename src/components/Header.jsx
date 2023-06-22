/* eslint-disable react/prop-types */
// import styled from '../styles/header.module.css'
import styled from 'styled-components';
import imagem from "../assets/img-header.jpg";

export default function Header() {
	return (
		<MyHeader style={{ backgroundImage: `url(${imagem})` }}>
			<div className='texto'>
				<h1>Estante Virtual</h1>
				<h2>Conheça livros incríveis escritos por autoras mulheres!</h2>
			</div>
		</MyHeader>
	)
}

const MyHeader = styled.header`
	width: 100vw;
	height: 450px;
	background-size: cover;
	background-position: 50% 50%;

	.texto {
		width: 100%;
		height: 100%;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		align-items: center;
		text-align: center;
		background-color: rgba(0,0,0, .2);
	}


	
`

