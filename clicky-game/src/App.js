import React, {Component} from "react";
import Nav from "./components/navBar/navBar";
import Jumbo from "./components/jumbotron/jumbo";
import Card from "./components/cardLayout/cardLayout";
import Seinfeld from "./seinfeld.json";

class App extends Component {

    state = {
        Seinfeld
    };

    render() {
        return(
            <div>
                <Nav />
                <Jumbo />
            {this.state.Seinfeld.map(characters => (
                <Card 
                    seinfeldImg = {characters.image}
                />
            ))}
            </div>
        );
    };
};

export default App;