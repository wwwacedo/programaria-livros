import styled from 'styled-components'; 

export default function Footer() {
  return (
    <MyFooter>
      <p>Feito com ♡ por Mariana M. Macêdo para o curso #BE1 da PrograMaria.</p>
    </MyFooter>
  )
}

const MyFooter = styled.footer`
	/* position: fixed;
	bottom: 0; */
	width: 100%;
	text-align: center;
	padding: 1rem 0;
`