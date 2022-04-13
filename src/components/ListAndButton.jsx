import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ListAndButton extends Component {
  constructor() {
    super();
    this.state = {
      filter: 'todas',
      trunfo: false,
    };
    this.filter = this.filter.bind(this);
    this.rmBnt = this.rmBnt.bind(this);
    this.tryunCheck = this.tryunCheck.bind(this);
  }

  filter(event) {
    this.setState({
      filter: event.target.value,
    });
  }

  rmBnt(event) {
    event.target.parentNode.remove();
    const { checkin } = this.props;
    checkin();
  }

  tryunCheck() {
    const { trunfo } = this.state;
    if (trunfo) {
      this.setState({
        trunfo: false,
      });
    } else {
      this.setState({
        trunfo: true,
      });
    }
  }

  hearthStone(card) {
    return (
      <div key={ card.name }>
        <Card
          cardName={ card.name }
          cardDescription={ card.describe }
          cardAttr1={ card.attr1 }
          cardAttr2={ card.attr2 }
          cardAttr3={ card.attr3 }
          cardImage={ card.img }
          cardRare={ card.select }
          cardTrunfo={ card.trunfo }
        />
        <button
          data-testid="delete-button"
          type="button"
          onClick={ this.rmBnt }
        >
          Excluir
        </button>
      </div>
    );
  }

  render() {
    const { pack } = this.props;
    const { filter, trunfo } = this.state;

    return (
      <section>
        <div>
          <input
            data-testid="name-filter"
            onChange={ this.filter }
            disabled={ trunfo }
          />
          <select
            data-testid="rare-filter"
            onChange={ this.filter }
            disabled={ trunfo }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
          <label htmlFor="trunfo-filter">
            Super Trybe Trunfo
            <input
              data-testid="trunfo-filter"
              type="checkbox"
              onClick={ this.tryunCheck }
            />
          </label>
        </div>
        <div>
          { (filter !== 'todas')
            ? (pack.filter((card) => (card.name.includes(filter)
            || card.select === filter)).map((card) => (this.hearthStone(card))))
            : (pack.filter((card) => {
              if (trunfo) return card.trunfo === trunfo;
              return card;
            }).map((card) => (this.hearthStone(card))))}
        </div>
      </section>
    );
  }
}

ListAndButton.propTypes = {
  pack: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkin: PropTypes.func.isRequired,
};

export default ListAndButton;
