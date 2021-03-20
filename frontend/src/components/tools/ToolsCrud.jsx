import React, { Component } from 'react';
import Main from '../template/Main';

const headerProps = {
	icon: 'tools',
	title: 'Nome',
	subtitle: 'Cadastro de ferramentas: Incluir, Listar, Alterar e Excluir.',
};

export default class ToolsCrud extends Component {
	rebder() {
		return <Main {...headerProps}>Cadastro de Ferramentas</Main>;
	}
}
