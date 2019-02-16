import React, {Component} from "react";
import Nav from "./components/navBar/navBar";
import Jumbo from "./components/jumbotron/jumbo";

class App extends Component {
    render() {
        return(
            <div>
                <Nav />,
                <Jumbo />
            </div>
        )
    }
}

export default App;