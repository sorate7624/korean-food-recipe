import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { BgBarPattern } from './components/BgBarPattern';
import { RecipeSearch } from './components/RecipeSearch';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <RecipeSearch />
        <BgBarPattern />
      </BrowserRouter>
    </>
  );
};
