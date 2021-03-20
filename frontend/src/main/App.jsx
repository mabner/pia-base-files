import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';

import './App.css';
import React from 'react';

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Home from '../components/home/Home';
import Footer from '../components/template/Footer';

export default (props) => (
	<div className="app">
		<Logo />
        <Nav />
        <Home />
		<Footer />
	</div>
);
