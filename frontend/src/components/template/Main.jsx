import './Main.css';
import React from 'react';
import Header from './Header'

export default (props) => (
	<React.Fragment>
		<Header {...props} />
		<main className="content container-fluid">
            <div className="p-3 mt3">


            </div>

        </main>
	</React.Fragment>
);