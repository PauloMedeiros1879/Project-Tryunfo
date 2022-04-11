import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      describe: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      img: '',
      select: 'normal',
      check: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, checked, type } = target;
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    });
  }

  render() {
    const { name, describe, attr1, attr2, attr3, img, select, check } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ describe }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ img }
          cardRare={ select }
          cardTrunfo={ check }
        />

        <Card
          cardName={ name }
          cardDescription={ describe }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ img }
          cardRare={ select }
          cardTrunfo={ check }
        />
      </div>
    );
  }
}

export default App;
