import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const SUMTOTAL = 210;
const ATTR = 90;

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    onSaveButtonClick: '',
  };

  onInputChange = ({ target }) => {
    const { name, value, checked } = target;
    this.setState(({
      [name]: (name === 'cardTrunfo' ? checked : value),
    }), () => {
      const { cardName, cardDescription,
        cardAttr1, cardAttr2,
        cardAttr3, cardImage, cardRare } = this.state;
      const inputLength = cardName.length && cardDescription.length
      && cardImage.length && cardRare.length > 1;

      const sumAttr = Number(cardAttr1)
      + Number(cardAttr2) + Number(cardAttr3) <= SUMTOTAL;

      const validateAttr = Number(cardAttr1) <= ATTR
      && Number(cardAttr2) <= ATTR && Number(cardAttr3) <= ATTR;

      const validate = Number(cardAttr1) >= 0
      && Number(cardAttr2) >= 0 && Number(cardAttr3) >= 0;

      const teste = (inputLength && sumAttr && validateAttr && validate);
      this.setState(({
        isSaveButtonDisabled: !teste,
      }));
    });
  };

  render() {
    return (
      <div>
        <h1>Tryunfo </h1>
        <Form
          onInputChange={ this.onInputChange }
          { ...this.state }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
