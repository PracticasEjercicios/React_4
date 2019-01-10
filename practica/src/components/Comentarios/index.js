import React, { Component } from 'react';
import { Collection, CollectionItem, Button } from 'react-materialize';
import axios from 'axios';

class Comentarios extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comentarios: [],
			error: ''
		};
	}

	async componentDidMount() {
		// axios.get('https://jsonplaceholder.typicode.com/commentss')
		// 	.then(
		// 		response => this.setState({ comentarios: response.data }),
		// 		error => this.setState({ error: error.message })
		// 	);

		try {
			let response = await axios.get('https://jsonplaceholder.typicode.com/comments');
			this.setState({ comentarios: response.data });
		}
		catch(error) {
			this.setState({ error: error.message });
		}
	}

	desplegarComentarios = () => (
		this.state.comentarios.map((obj, index) => (
			<CollectionItem key={obj.email}>
				<b>{ obj.email }</b>
				<br />
				{ obj.body }
			</CollectionItem>
		))
	);

	render() {
		return (
			<div>
				Lista de comentarios
				<br />
				<Button waves='light' node='a' href='/comentarios/agregar'>
					Agregar Comentario
				</Button>
				<Collection header={ this.state.error || 'Comentarios' }>
				  { this.desplegarComentarios() }
				</Collection>
			</div>
		);
	}
}

export default Comentarios;
