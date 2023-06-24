import styled from "styled-components";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { FaGithubSquare as Github } from "react-icons/fa";

export default function Footer() {

    return (
        <FooterTag>
            <div className="content">
				<p>Feito com ♡ para o curso #BE1 da PrograMaria</p>
            </div>
			<div className="dev">
				<p>Mariana M. Macêdo | Dev</p>	
				<div  className="social">
					<a href="https://www.linkedin.com/in/wwwacedo" target="blank">
						<Linkedin className="rede" fontSize={'2rem'} color='white'/>
					</a>
					<a href="https://github.com/wwwacedo">
						<Github className="rede" fontSize={'2rem'} color='white'/>
					</a>
				</div>
			</div>
        </FooterTag>
    )
}

const FooterTag = styled.footer`
    width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 1.5rem 0 1rem;

	div.content {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	div.dev {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: .5rem;
		
		p {
			font-size: .9rem;
			padding-bottom: .3rem;
		}
		
		.social {
			display: flex;
			gap: .8rem;
		}
	}
	
`
