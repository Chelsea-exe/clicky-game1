import React, { Component } from 'react';
import PrincessCard from "./cards/card";
import princess from "./princesses/princesses.json";
import Header from "./header/header";
import Score from "./Score/score";
//import './App.css';


class App extends Component {
  state = {
    princess,
    currentScore: 0,
    clicked: false
  };

  handleClick = id => {
    this.princessShuffle();
    this.princessScore(id);
  };

  princessScore = id => {

  }

  render() {
    return (
      <Header />
      <Score />
      {this.state.princess.map(princess =>
        <PrincessCard
        Clicked={this.state.Clicked}
        handleClick={this.handleClick}
        id={princesses.id}
        )}/>
    );
  }
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