import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats.js';


function Header(props) {
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>Scoreboard</h1>
    </div>
  );
}

Header.propTypes = {
  players: PropTypes.array.isRequired,
};

export default Header;
