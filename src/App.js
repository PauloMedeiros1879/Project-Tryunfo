import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import ListAndButton from './components/ListAndButton';

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
      trunfo: false,
      tryunCheck: false,
      isSaveButtonDisabled: true,
      pack: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.formValidate = this.formValidate.bind(this);
    this.checkin = this.checkin.bind(this);
  }

  onInputChange({ target }) {
    const { name, value, checked, type } = target;
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    }, this.formValidate);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { name, describe, attr1, attr2, attr3, img, select, trunfo } = this.state;
    if (trunfo) {
      this.setState((beforeState) => ({
        name: '',
        img: '',
        describe: '',
        attr1: 0,
        attr2: 0,
        attr3: 0,
        select: 'normal',
        trunfo: false,
        hasTrunfo: true,
        isSaveButtonDisabled: true,
        pack: [...beforeState.pack, {
          name,
          describe,
          attr1,
          attr2,
          attr3,
          img,
          select,
          trunfo,
        }],
      }));
    } else {
      this.setState((beforeState) => ({
        name: '',
        img: '',
        describe: '',
        attr1: 0,
        attr2: 0,
        attr3: 0,
        select: 'normal',
        trunfo: false,
        isSaveButtonDisabled: true,
        pack: [...beforeState.pack, {
          name,
          describe,
          attr1,
          attr2,
          attr3,
          img,
          select,
          trunfo,
        }],
      }));
    }
  }

  buttonValidate(attr, input) {
    const elements = attr.map((e) => Number(e));
    const maxTotal = 210;
    const max = 90;
    const min = 0;
    let validate;
    let totalAttr = elements[0] + elements[1] + elements[2];

    if (input[0] && input[1] && input[2]) {
      validate = false;
    } else {
      return true;
    }
    if (totalAttr <= maxTotal) {
      validate = false;
    } else {
      return true;
    }
    elements.forEach((element) => {
      totalAttr += element;
      if (element >= min && element <= max) {
        return false;
      }
      validate = true;
    });
    return validate;
  }

  formValidate() {
    const { name, describe, attr1, attr2, attr3, img } = this.state;
    const attr = [attr1, attr2, attr3];
    const input = [name, describe, img];
    this.setState({
      isSaveButtonDisabled: this.buttonValidate(attr, input),
    });
  }

  checkin() {
    this.setState({
      hasTrunfo: false,
    });
  }

  render() {
    const { name, describe, attr1, attr2, attr3, img,
      select, trunfo, isSaveButtonDisabled, tryunCheck, hasTrunfo, pack } = this.state;
    return (
      <main>
        <header>
          <h1>Tryunfo</h1>
          <h2>Adicionar nova carta</h2>
        </header>
        <div>
          <Form
            cardName={ name }
            cardDescription={ describe }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ img }
            cardRare={ select }
            cardTrunfo={ trunfo }
            hasTrunfo={ hasTrunfo }
            tryunCheck={ tryunCheck }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            isSaveButtonDisabled={ isSaveButtonDisabled }
          />

          <Card
            cardName={ name }
            cardDescription={ describe }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ img }
            cardRare={ select }
            cardTrunfo={ trunfo }
          />
        </div>
        <ListAndButton
          pack={ pack }
          checkin={ this.checkin }
        />
      </main>
    );
  }
}

export default App;
