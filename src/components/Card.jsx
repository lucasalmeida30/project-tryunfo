import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, buttonDelete, isDeleteButton } = this.props;
    return (
      <div className="card" name={ cardName }>
        <h3 data-testid="name-card">{ cardName }</h3>
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1}</p>
        <p data-testid="attr2-card">{ cardAttr2}</p>
        <p data-testid="attr3-card">{ cardAttr3}</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <h4 data-testid="rare-card">{ cardRare }</h4>
        {
          cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : false
        }
        {
          isDeleteButton ? (
            <button
              name={ cardName }
              data-testid="delete-button"
              type="button"
              onClick={ buttonDelete }
            >
              Excluir
            </button>) : false
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  buttonDelete: PropTypes.func.isRequired,
  isDeleteButton: PropTypes.bool.isRequired,
};

export default Card;
