import React from 'react';
import Keycloak from './Keycloak.js';
import { keycloak } from '../modules/keycloak.js';

function Welcome() {
	return (
		<div>
			Welcome {keycloak.idTokenParsed.name}!
			<button onClick={() => keycloak.accountManagement()}>Account</button>
			<button onClick={() => keycloak.logout()}>Logout</button>
		</div>
	);
}

function App() {
	return (
		<Keycloak>
			<Welcome />
		</Keycloak>
	);
}

export default App;