import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';

const FavoritesPage = () => {
    // State to store favorite recipes
    const [favorites, setFavorites] = useState([]);

    // Function to retrieve favorite recipes from local storage
    const getFavoritesFromStorage = () => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    };

    useEffect(() => {
        getFavoritesFromStorage();
    }, []);

    // Function to remove a recipe from favorites
    const removeFromFavorites = (title) => {
        const updatedFavorites = favorites.filter(recipe => recipe.title !== title);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div>
            <h1>Favorite Recipes</h1>
            {favorites.length === 0 ? (
                <p>No favorite recipes yet!</p>
            ) : (
                <div className="recipes-container">
                    {favorites.map((recipe, index) => (
                        <RecipeCard
                            key={index}
                            title={recipe.title}
                            calories={recipe.calories}
                            image={recipe.image}
                            ingredients={recipe.ingredients}
                            // Add a remove button to remove the recipe from favorites
                            removeFavorite={() => removeFromFavorites(recipe.title)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoritesPage;
