import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function PreviousSearches({ onSearchSelect }) {
    const [search, setSearch] = useState('');
    const [previousSearches, setPreviousSearches] = useState([]);

    useEffect(() => {
        const storedSearches = localStorage.getItem('previousSearches');
        if (storedSearches) {
            setPreviousSearches(JSON.parse(storedSearches));
        }
    }, []);

    const handleSearchSelect = (search) => {
        onSearchSelect(search);
    };

    const handleSearchInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (search.trim() !== '') {
            const updatedSearches = [search, ...previousSearches];
            setPreviousSearches(updatedSearches);
            localStorage.setItem('previousSearches', JSON.stringify(updatedSearches));
            onSearchSelect(search);
            setSearch(''); // Clear the search input after successful submission
        }
    };


    const handleDeleteSearch = (index) => {
        const updatedSearches = [...previousSearches];
        updatedSearches.splice(index, 1);
        setPreviousSearches(updatedSearches);
        localStorage.setItem('previousSearches', JSON.stringify(updatedSearches));
    };

    return (
        <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                {previousSearches.map((searchTerm, index) => (
                    <div key={index} className="search-item">
                        <span onClick={() => handleSearchSelect(searchTerm)}>{searchTerm}</span>
                        <button  onClick={() => handleDeleteSearch(index)} className="delete-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSearchSubmit}>
                <div className="search-box">
                    <input type="text" placeholder="Search ..." value={search} onChange={handleSearchInputChange} />
                    <button type="submit" className="btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </form>
        </div>
    );
}
