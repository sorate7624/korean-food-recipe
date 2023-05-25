import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetail } from './components/RecipeDetail';
import { BgBarPattern } from './components/BgBarPattern';

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe === selectedRecipe ? { ...recipe } : recipe);
  };

  return (
    <>
      <BrowserRouter>
        <Header onSearchTermChange={handleSearchTermChange} />
        <RecipeCard searchTerm={searchTerm} onRecipeClick={handleRecipeClick} />
        {selectedRecipe && <RecipeDetail selectedRecipe={selectedRecipe} />}
        <BgBarPattern />
      </BrowserRouter>
    </>
  );
};
