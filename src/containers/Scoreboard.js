import React from 'react';
import Header from '../components/Header.js';
import Player from '../components/Player.js';
import AddPlayerForm from '../components/AddPlayerForm.js';
import '../App.css';

export default class Scoreboard extends React.Component {

 state = {
  players: [
    {
      name: 'Jim Hoskins',
      score: 31,
    },
    {
      name: 'Andrew Chalkley',
      score: 20,
    },
    {
      name: 'Alena Holligan',
      score: 50,
    },
  ],
}

onScoreChange = (index, delta) => {
  const player = this.state.players;
  player[index].score += delta;
  this.setState({ player })
  }

onAddPlayer = (name) => {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  }

onRemovePlayer = (index) => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(function(player, index) {
             return (
               <Player
                 name={player.name}
                 score={player.score}
                 key={player.name}
                 onScoreChange={(delta) => this.onScoreChange(index, delta)}
                 onRemove={() => this.onRemovePlayer(index)}
               />
             );
           }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
}
