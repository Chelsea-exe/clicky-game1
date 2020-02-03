import React, { Component } from 'react';
import PrincessCard from "./cards/card";
import princess from "./princesses/princesses.json";
import Header from "./header/header";
import Score from "./Score/score";
import Wrapper from "./wrapper/wrapper";
import './App.css';

//tried this element to define the cards from a tutorial I saw but I'm still doing something wrong still isn't working for me.
//design wise everything was loading correctly on the page.

class App extends Component {
  state = {
    princess: [],
    currentScore: 0,
    clicked: false
  };

  princessClick = id => {
    this.princessShuffle();
    this.princessScore(id);
  };

  princessScoreBoard = id => {
    this.setState({ currentScore: 0 });
      this.setState({ Clicked: true });
      this.state.princess.forEach(element => (element.clicked = false));
      console.log("princess card has been picked"); 
    this.state.princess.forEach(element => {
      if (id === element.id && element.clicked === false) {
        elelment.clicked = true;
        this.setState({ Clicked: false });
        this.addScore();
      }
      // else (id === element.id && element.clicked === true) {
      //   if (this.state.currentScore)
      // }
    });
  };
  princessShuffle = () => {
    const shuffleJson = this.shuffle(this.state.princess);
    this.setState({ shuffleJson });
  };

  shuffle = princessArray => {
    var currentIndex = princessArray.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = princessArray[currentIndex];
      princessArray[currentIndex] = princessArray[randomIndex];
      princessArray[randomIndex] = temporaryValue;
    }
    return princessArray;
  };
  
  addScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1 })
  }
  render() {
    return (
      <Wrapper>
        <Header/>
        <Score
        currentScore={this.state.currentScore} />
        {this.state.princess.map(princess =>
                  <PrincessCard
                  princessClick={this.princess}
                  id={princess.id}
                  key={princess.id}
                  name={princess.name}
                  image={princess}
                  />
                  )}
      </Wrapper>
    )
  }
}


export default App;
 