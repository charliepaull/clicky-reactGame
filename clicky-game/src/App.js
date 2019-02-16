import React, {Component} from "react";
import Nav from "./components/navBar/navBar";
import Jumbo from "./components/jumbotron/jumbo";
import Card from "./components/cardLayout/cardLayout";
import Seinfeld from "./seinfeld.json";

class App extends Component {

    state = {
        Seinfeld, 
        topScore: 7,
        score: 0
    };

    scoreIncrement = () => {
        this.setState({ score: 
        this.state.score + 1});
        console.log("I am clicked!");
    };

    render() {
        return(
            <div>
                <Nav 
                    scoreIncrement = {this.scoreIncrement}
                />
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