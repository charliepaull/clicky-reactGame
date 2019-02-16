import React, {Component} from "react";
import Nav from "./components/navBar/navBar";
import Jumbo from "./components/jumbotron/jumbo";
import Card from "./components/cardLayout/cardLayout";

class App extends Component {
    render() {
        return(
            <div>
                <Nav />,
                <Jumbo />,
                <Card />
            </div>
        )
    }
}

export default App;