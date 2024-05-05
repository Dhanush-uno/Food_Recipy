import React, { useState } from 'react';
import ContextProvider from '../context/Context'; 
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './DetailedRecipePage.css'; // Import custom CSS file for styling

import Main from '../components/Main';

const DetailedRecipePage = ({ location }) => {
    const history = useHistory();
    const [isFavorite, setIsFavorite] = useState(false);

    const handleGoBack = () => {
        history.goBack(); 
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
        
            <h2>{title}</h2>
            <div className="recipe-details-container">
                <div className="recipe-image-container">
                    <img src={image} alt={title} />
                </div>
                <div className="recipe-info">
                    <p className='calories'>Calories: {calories}</p>
                    
                </div>
                
            
                
            </div>
            <ContextProvider><Main title={title}/></ContextProvider>
            
        </div>
    );
};

DetailedRecipePage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default DetailedRecipePage;