import React, { Component } from 'react';
import Main from '../template/Main';

const headerProps = {
	icon: 'tools',
	title: 'Ferramentas',
	subtitle: 'Cadastro de ferramentas: Incluir, Listar, Alterar e Excluir.',
};

export default class ToolsCrud extends Component {
	render() {
		return <Main {...headerProps}>Cadastro de Ferramentas</Main>;
	}
}
