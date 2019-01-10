import React, { Component } from 'react';
import { Input, Button, Preloader } from 'react-materialize';
import axios from 'axios';

class Agregar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nombre: '',
			correo: '',
			comentario: '',
			cargando: false
		}
	}

	handleChange = event => this.setState({ [event.target.name]: event.target.value });

	enviar = async () => {
		this.setState({ cargando: true });

		const {
			nombre: name,
			correo: email,
			comentario: body
		} = this.state;

		const valores = { name, email, body };

		try {
			await axios.post('https://jsonplaceholder.typicode.com/comments', valores);
			window.Materialize.toast('Comentario guardado exitosamente.', 5 * 1000);
			this.setState({
				nombre: '',
				correo: '',
				comentario: ''
			});
		} catch(error) {
			window.Materialize.toast('Intente más tarde.', 5 * 1000, 'red');
		}

		this.setState({ cargando: false });
	};

	render() {
		return (
			<div>
				<div className="row">
					<Input
						s={6}
						label="Nombre Completo"
						value={this.state.nombre}
						onChange={this.handleChange}
						name="nombre"
					/>
					<Input
						s={6} 
						label="Correo"
						type="email"
						value={this.state.correo}
						onChange={this.handleChange}
						name="correo"
					/>
				</div>
				<div className="row">
					<Input
						s={12}
						label="Comentario"
						type="textarea"
						value={this.state.comentario}
						onChange={this.handleChange}
						name="comentario"
					/>
				</div>
				<div className="row">
					<div className="col s6 offset-s3 center">
						<Button
							style={{width: '100%'}}
							waves='light'
							onClick={this.enviar}
							disabled={this.state.cargando}
						>
							Enviar
						</Button>
						<br /><br />
						<Preloader active={this.state.cargando} size='big'/>
					</div>
				</div>
			</div>
		);
	}
}

export default Agregar;
