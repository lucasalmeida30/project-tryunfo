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
    // isSaveButtonDisabled: true,
  };

  // handleValidationButton = () => {
  //   const { cardName, cardDescription,
  //     cardAttr1, cardAttr2, cardAttr3,
  //     cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
  //   if (cardName || cardDescription || cardImage || cardRare === '') {
  //             return  isSaveButtonDisabled: false
  //   }
  //   const sumAttr = cardAttr1 + cardAttr2 + cardAttr3;
  // };

  onInputChange = ({ target }) => {
    const { name, value, checked } = target;
    this.setState(({
      [name]: (name === 'cardTrunfo' ? checked : value),
    }));
  };

  isSaveButtonDisabled = () => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;

    const name = cardName.length && cardDescription.length
    && cardImage.length && cardRare.length > 1;

    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= SUMTOTAL;

    const validateAttr = Number(cardAttr1) <= ATTR
    && Number(cardAttr2) <= ATTR && Number(cardAttr3) <= ATTR;

    const validate = Number(cardAttr1) >= 0
    && Number(cardAttr2) >= 0 && Number(cardAttr3) >= 0;

    return (name && sumAttr && validateAttr && validate);
  };

  render() {
    return (
      <div>
        <h1>Tryunfo </h1>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          { ...this.state }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
