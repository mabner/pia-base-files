import './Footer.css';
import React from 'react';

// Find the icons at https://fontawesome.com/icons?d=gallery&p=2

export default (props) => (
	<footer className="footer">
		<span>
			Trabalho desenvolvido utilizando  <i className="fab fa-js-square cjs"></i>{'  '}
			<i className="fab fa-node cnode"></i>  <i className="fab fa-react creact"></i>  para a
			disciplina de Projetos Integrados.
		</span>
	</footer>
);