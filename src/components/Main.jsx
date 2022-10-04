import React from 'react'
import { Container } from 'react-bootstrap'
import Links from './Links'
import NavbarComponent from './Navbar'
import TeamGrid from './TeamGrid'

const Main = () => {
	return (
		<div>
			{/* <NavbarComponent /> */}
			<Container>
				<a name="home"><h1>EVP-Chess Project</h1></a>

				<a name='links'><h1>Links</h1></a>
				<Links />

				<a name='team'><h1>Team</h1></a>
				<TeamGrid />
			</Container>
		</div>
	)
}

export default Main;