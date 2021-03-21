import React, { Component } from 'react';
import Main from '../template/Main';
import axios from 'axios';

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

	renderForm() {}

	renderTable() {}

	renderRow() {}

	render() {
		return <Main {...headerProps}>Cadastro de Ferramentas</Main>;
	}
}
