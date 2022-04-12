import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuperTrunfo extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="trunfo">
        Marque se for um Super Tryunfo:
        <input
          name="check"
          type="checkbox"
          data-testid="trunfo-input"
          id="trunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

SuperTrunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SuperTrunfo;
