import React, { useState, useEffect } from 'react';
import RecipeCard from "../components/RecipeCard";
import PreviousSearches from "../components/PreviousSearches";
import { Rings } from 'react-loader-spinner';
import './Recipes.css';

export default function Recipes() {
    const app_id = "158540c6";
    const app_key = "4cc951f3ecf74138534e62890c0537ce";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [submit, setSubmit] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getRecipe();
    }, [submit]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (search.trim() !== '') {
                setSubmit(search);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);


    const handleSearchSelect = (selectedSearch) => {
        setSubmit(selectedSearch);
    };

    const getRecipe = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${submit}&app_id=${app_id}&app_key=${app_key}`);
            const data = await response.json();
            console.log(data.hits);
            setRecipes(data.hits);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSelectChange = (selectedOption, setState) => {
        if (selectedOption.value === '') {
            setState(' ');
        } else {
            setState(`&${setState}=${selectedOption.value}`);
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
                    <div className="primedeals-loader-container">
                        <Rings type="ThreeDots"className='btn' height="50" width="50" />
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
}
