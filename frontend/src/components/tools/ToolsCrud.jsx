import axios from 'axios';
import React, { Component } from 'react';
import Main from '../template/Main';

const headerProps = {
	icon: 'tools',
	title: 'Ferramentas',
	subtitle: 'Cadastro de ferramentas: Incluir, Listar, Alterar e Excluir.',
};

const baseUrl = 'http://localhost:3001/tools';
const initialState = {
	tools: { name: '', description: '', usage: '' },
	list: [],
};

export default class ToolsCrud extends Component {
	state = { ...initialState };

	// Clears the form
	clear() {
		this.setState({ tools: initialState.tools });
	}

	// Saves new tools or alters existing one
	save() {
		const tools = this.state.tools;

		// If tool has valid ID then PUT, no ID do a POST (new record)
		const method = tools.id ? 'put' : 'post';

		// PUT URL : POST URL
		const url = tools.id ? `${baseUrl}/${tools.id}` : baseUrl;
		axios[method](url, tools).then((resp) => {
			// resp.data returns the data returned from the webservice (our json server)
			const list = this.getUpdatedList(resp.data);
			this.setState({ tools: initialState.tools, list });
		});
	}

	getUpdatedList(tools) {
		const list = this.state.list.filter((t) => t.id !== tools.id);
		list.unshift(tools);
		return list;
	}

	updateField(event) {
		// Clones the tool with a spread operator
		const tools = { ...this.state.tools };
		tools[event.target.name] = event.target.value;
		this.setState({ tools });
	}

	renderForm ()
	{
		return (
			<div className="form">
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label>Nome</label>
							<input
								type="text"
								className="form-control"
								name="name"
								value={this.state.tools.name}
								onChange={(event) => this.updateField(event)}
								placeholder="Digite o nome da ferramenta..."
							/>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label>Descrição</label>
							<input
								type="text"
								className="form-control"
								name="description"
								value={this.state.tools.description}
								onChange={(event) => this.updateField(event)}
								placeholder="Digite uma descrição para a ferramenta..."
							/>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label>Tema</label>
							<input
								type="text"
								className="form-control"
								name="usage"
								value={this.state.tools.usage}
								onChange={(event) => this.updateField(event)}
								placeholder="Digite o tema da ferramenta..."
							/>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-12 d-flex justify-content-end">
						<button
							className="btn btn-primary"
							onClick={(event) => this.save(event)}
						>
							Salvar
						</button>

						<button
							className="btn btn-secondary ml-2"
							onClick={(event) => this.clear(event)}
						>
							Cancelar
						</button>
					</div>
				</div>
			</div>
		);

	}

	renderTable ()
	{

	}

	renderRow ()
	{

	}

	render() {
		return <Main { ...headerProps }>
			{this.renderForm()}
		</Main>;
	}
}
