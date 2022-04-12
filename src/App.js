import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      img: '',
      describe: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      select: 'normal',
      check: false,
      hasTrunfo: false,
      // isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    // this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    // this.buttonValidate = this.buttonValidate.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, checked, type } = target;
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    });
  }

  // onSaveButtonClick(event) {
  //   event.preventDefault();
  //   if (buguei) {
  //     this.setState(() => ({
  //       name: '',
  //       img: '',
  //       describe: '',
  //       attr1: 0,
  //       attr2: 0,
  //       attr3: 0,
  //       select: 'normal',
  //       check: false,
  //     }));
  //   }
  // }

  // buttonValidate() {
  //   const { cardName, cardDescription, cardImage, cardRare } = this.state;
  //   total = 210
  //   max = 90
  //   min = 0
  //   if (
  //     cardName,
  //     && cardDescription,
  //     && cardImage,
  //     && cardRare,
  //   ) {
  //     this.setState({
  //       isSaveButtonDisabled: false,
  //     });
  //   } else {
  //     this.setState({
  //       isSaveButtonDisabled: true,
  //     });
  //   }
  // }

  render() {
    const { name, describe, attr1, attr2, attr3, img,
      select, check, hasTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <h2>Adicionar nova carta</h2>
        <Form
          cardName={ name }
          cardDescription={ describe }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ img }
          cardRare={ select }
          cardTrunfo={ check }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
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
