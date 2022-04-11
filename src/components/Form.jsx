import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="name">
            Name
            <input type="text" data-testid="name-input" id="name" />
          </label>

          <label htmlFor="description">
            Descrição:
            <textarea data-testid="description-input" id="description"> </textarea>
          </label>

          <label htmlFor="attr1">
            attr1
            <input type="number" data-testid="attr1-input" id="attr1" />
          </label>

          <label htmlFor="attr2">
            attr2
            <input type="number" data-testid="attr2-input" id="attr2" />
          </label>

          <label htmlFor="attr3">
            attr3
            <input type="number" data-testid="attr3-input" id="attr3" />
          </label>
        </div>

        <div>
          <label htmlFor="img">
            <input type="text" data-testid="image-input" id="img" />
          </label>
        </div>

        <div>
          <label htmlFor="select-rare">
            Selecione a raridade:
            <select data-testid="rare-input" id="select-rare">

              <option value="">Selecione</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito-raro">Muito Raro</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="trunfo">
            Marque se for um Super Tryunfo:
            <input type="checkbox" data-testid="trunfo-input" id="trunfo" />
          </label>
        </div>

        <button data-testid="save-button" id="save" type="submit">Salvar</button>
      </div>
    );
  }
}

export default Form;
