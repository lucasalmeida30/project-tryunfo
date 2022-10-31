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
    arrayCard: [],
    // isDeleteButton: false,
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

  onSaveButtonClick = () => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;
    this.setState((prev) => ({
      arrayCard: [...prev.arrayCard, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: cardTrunfo ? true : '',
        isDeleteButton: true,
      });
    });
  };

  // exibitionList = () => {
  //   const { arrayCard } = this.state;
  //   const listCards = (arrayCard.map((card, index) => (
  //     <Card key={ index } buttonDelete={ this.buttonDelete } { ...card } />
  //   )));
  //   return listCards;
  // };

  buttonDelete = ({ target }) => {
    const { name } = target;
    const { arrayCard } = this.state;
    const teste = arrayCard.filter((card) => card.cardName !== name);
    this.setState(({
      arrayCard: teste,
    }));
    arrayCard.forEach((element) => {
      if (element.cardTrunfo) {
        this.setState(({
          hasTrunfo: false,
        }));
      }
    });
  };

  render() {
    const { arrayCard, isDeleteButton, cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo </h1>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          { ...this.state }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          {
            arrayCard.map((card, index) => (
              <Card
                key={ index }
                buttonDelete={ this.buttonDelete }
                { ...card }
                isDeleteButton={ isDeleteButton }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
