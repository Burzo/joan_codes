import React from 'react';

import Main from "./components/main/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"

class App extends React.Component {
	render() {
		return(
			<div className="body">
				<Header />
				<Main />
				<Footer />
			</div>
		)
	}
}

export default App;
