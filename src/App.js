import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
  };

  handleValidation = (name) => {
    if (name === 'cardTrunfo') {
      this.setState({ cardTrunfo: !this.cardTrunfo });
    }
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'cardTrunfo') {
      this.handleValidation(name);
    } else {
      this.setState(({
        [name]: value,
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>Tryunfo </h1>
        <Form onInputChange={ this.onInputChange } { ...this.state } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
