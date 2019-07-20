import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom"

import Main from "./components/main/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MyCodes from "./components/mycodes/MyCodes"

class App extends React.Component {
	render() {
		return(
			<div className="body-container">
				<Header />
				<main>
					<Switch>
						<Route path="/" component={Main} exact />
						<Route path="/mycodes" component={MyCodes} exact />
						<Route component={Main} exact />
					</Switch>
				</main>
				<Footer />
			</div>
		)
	}
}

export default App;
