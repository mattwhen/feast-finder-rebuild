import { useState, useContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Container from '../src/components/Container/Container';
import { fetchRandomRecipes } from './features/getRandomRecipe';
import { RecipeData } from './features/getRandomRecipe/components/Recipe/Context';
import { recipeSearch } from './features/getRecipes';

function App() {
	// When the API is called, we should expect an Array of Objects.
	const [recipeData, setRecipeData] = useState(null);
	const [value, setValue] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	const getRandomRecipes = async () => {
		try {
			const recipe = await fetchRandomRecipes();
			console.log(recipe);
			setRecipeData(recipe);
		} catch (error) {
			console.error('Error displaying recipe', error);
		}
	};

	const searchRecipe = async (value) => {
		try {
			const recipe = await recipeSearch(value);
			console.log(recipe);
			setRecipeData(recipe);
		} catch (error) {
			console.error('Error searching recipes', error);
		}
	};

	return (
		<div className='App'>
			<RecipeData.Provider
				value={{
					getRandomRecipes,
					searchRecipe,
					recipeData,
					setRecipeData,
					value,
					setValue,
					isLoading,
					currentPage,
					setCurrentPage,
				}}
			>
				<Header />
				{/* NOTE: that we MUST pass in the prop called "value" and provide it 
			no other name, or else this will not work as expected. */}
				<Container />
			</RecipeData.Provider>
		</div>
	);
}

export default App;
