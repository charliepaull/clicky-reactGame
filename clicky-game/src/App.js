import React, {Component} from "react";
import Nav from "./components/navBar/navBar";
import Jumbo from "./components/jumbotron/jumbo";
import Card from "./components/cardLayout/cardLayout";
import Seinfeld from "./seinfeld.json";

class App extends Component {

    state = {
        Seinfeld, 
        topScore: 0,
        score: 0,
        arr: [],
        navMessage: "Click a photo to begin!"
    };

    shuffleArray = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
    };    

    scoreIncrement = (event) => {

        let newArr = this.state.arr;
        newArr.push(event);
        this.setState({ arr: newArr });
        console.log(newArr);
        
        if (new Set(newArr).size !== newArr.length) {
            this.setState({
                topScore: this.state.score,
                arr: [],
                navMessage: "Incorrect! Start a new game"
            })
            this.setState({ score: 0})
            
        }
        
        else {
            if (this.state.score < this.state.topScore) {
                this.setState({
                    score: this.state.score + 1
                });
                this.setState.Seinfeld = this.shuffleArray(this.state.Seinfeld);
                console.log(event);

            } else if (this.state.score >= this.state.topScore) {
                this.setState({
                    score: this.state.score + 1
                });
                this.setState({
                    topScore: this.state.topScore + 1
                });
                this.setState.Seinfeld = this.shuffleArray(this.state.Seinfeld);
            }
            }      
        }

    render() {
        return(
            <div>
                <Nav 
                    score = {this.state.score}
                    topScore = {this.state.topScore}
                    navMessage = {this.state.navMessage}
                />
                <Jumbo />
            {this.state.Seinfeld.map(characters => (
                <Card 
                    seinfeldImg = {characters.image}
                    scoreIncrement = {this.scoreIncrement}
                    id = {characters.id}
                />
            ))}
            </div>
        );
    };
};

export default App;