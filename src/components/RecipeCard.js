import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './recipecard.css'

const RecipeCard = ({ title, calories, image, ingredients }) => {
    const history = useHistory();

    const handleCardClick = () => {
        history.push({
            pathname: `/recipes/${title}`, // Navigate to the recipe detail page with the title in the URL
            state: {
                title,
                calories,
                image,
                ingredients,
            }
        });
    };

    return (
        <div className="recipe-card" onClick={handleCardClick}>
            <h2 className='recipe-title'>{title}</h2>
            <div className='recipe-image'>
                <img src={image} alt={title} />
            </div>
            
        </div>
    );
};

RecipeCard.propTypes = {
    title: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    })).isRequired,
};

export default RecipeCard;
