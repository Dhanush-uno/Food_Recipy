import React, { useState, useEffect } from 'react';
import RecipeCard from "../components/RecipeCard";
import PreviousSearches from "../components/PreviousSearches";
import { Rings } from 'react-loader-spinner';
import './Recipes.css';

const Recipes = () => {
    const app_id = "158540c6";
    const app_key = "4cc951f3ecf74138534e62890c0537ce";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (search.trim() !== '') {
            getRecipes();
        }
    }, [search]);

    const getRecipes = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${app_id}&app_key=${app_key}`);
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const data = await response.json();
            setRecipes(data.hits);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchSelect = (selectedSearch) => {
        setSearch(selectedSearch);
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            // Trigger search when Enter is pressed
            getRecipes();
        }
    };

    return (
        <div>
            <PreviousSearches
                search={search}
                setSearch={setSearch}
                onSearchSelect={handleSearchSelect}
            />
            <div className="recipes-container">
                {loading ? (
                    <div className="loading-container">
                        <Rings type="ThreeDots" color="#00BFFF" height={150} width={150} />
                    </div>
                ) : error ? (
                    <div className="error-message">{error}</div>
                ) : recipes.length === 0 ? (
                    <div className="default-images-container">
                        <img src="https://cdn-icons-png.flaticon.com/512/1147/1147873.png"alt="Default Recipe 1" />
                        
                    </div>
                ) : (
                    recipes.map((recipe, index) => (
                        <RecipeCard
                            key={index}
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Recipes;
