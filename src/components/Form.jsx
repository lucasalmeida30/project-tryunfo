import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome da carta
          <input
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="descriçao">
          Descrição
          <textarea
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          Velocidade
          <input
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Arrancada
          <input
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Estabilidade
          <input
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="img">
          Imagem
          <input
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
          />
        </label>
        <select
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        {
          hasTrunfo ? <h3>Você já tem um Super Trunfo em seu baralho</h3>
            : (
              <label htmlFor="check">
                Super Trunfo
                <input
                  id="check"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  type="checkbox"
                  data-testid="trunfo-input"
                />
              </label>
            )
        }

        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
