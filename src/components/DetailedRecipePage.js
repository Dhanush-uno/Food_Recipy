import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './DetailedRecipePage.css'; // Import custom CSS file for styling

const DetailedRecipePage = ({ location }) => {
    const history = useHistory();
    const [isFavorite, setIsFavorite] = useState(false);

    const handleGoBack = () => {
        history.goBack(); 
    };

    const handleFavoriteToggle = () => {
    console.log('Toggling favorite...');
    setIsFavorite(prevState => !prevState);
};


    if (!location.state) {
        return <div>Error: Recipe details not found.</div>;
    }

    // Access properties from location.state
    const { title, calories, image, ingredients } = location.state;

    return (
        <div className="detailed-recipe">
            <button className="delete-btn btn" onClick={handleGoBack}>
                {/* Back arrow icon */}
                &#8592; Go back
            </button>
            <button className="favorite-btn btn" onClick={handleFavoriteToggle}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <h2>{title}</h2>
            <div className="recipe-details-container">
                <div className="recipe-image-container">
                    <img src={image} alt={title} />
                </div>
                <div className="recipe-info">
                    <p>Calories: {calories}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredients && ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

DetailedRecipePage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default DetailedRecipePage;
