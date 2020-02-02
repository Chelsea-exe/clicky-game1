import React, { Component } from 'react';
import PrincessCard from "./cards/card";
import princess from "./princesses/princesses.json";
import Header from "./header/header";
import Score from "./Score/score";
import Wrapper from "./wrapper/wrapper";
//import './App.css';


// class App extends Component {
//   state = {
//     princess,
//     currentScore: 0,
//     clicked: false
//   };

//   princessClick = id => {
//     this.princessShuffle();
//     this.princessScore(id);
//   };

//   princessScoreBoard = id => { 
//     this.state.princess.forEach(element => {
//       if (id === element.id && element.clicked === false) {
//         elelment.clicked = true;
//         this.setState({ Clicked: false });
//         this.addScore();
//       }
//       // else (id === element.id && element.clicked === true) {
//       //   if (this.state.currentScore)
//       // }
//       this.setState({ currentScore: 0 });
//       this.setState({ Clicked: true });
//       this.state.princess.forEach(element => (element.clicked = false));
//       console.log("princess card has been picked");
//     });
//   };
//   princessShuffle = () => {
//     const shuffleJson = this.shuffle(this.state.princess);
//     this.setState({ shuffleJson });
//   };

//   // shuffle = array => {
//   //   var currentIndex = array.length,
    
//   // }
  
//   addScore = () => {
//     this.setState({ currentScore: this.state.currentScore + 1 })
//   }
  render() {
    return (
      <Wrapper>
        <Header/>
        <Score
        currentScore={this.state.currentScore} />
        <PrincessCard
        princessClick={this.princess}
        id={princess.id}
        key={princess.id}
        name={princess.name}
        image={princess.image} />
      </Wrapper>
    )
  }



export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }