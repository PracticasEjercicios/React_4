import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

const Menu = (props) =>
(
	<div>
		<Navbar left>
		  <NavItem href='/comentarios'><Icon>comment</Icon></NavItem>
		  <NavItem href='/'><Icon>delete</Icon></NavItem>
		</Navbar>
	</div>
);

export default Menu;