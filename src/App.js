import { useState, useContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Container from '../src/components/Container/Container';
import { fetchRandomRecipes } from './features/getRandomRecipe';
import { RecipeData } from './features/getRandomRecipe/components/RandomRecipe/Context';

function App() {
	// When the API is called, we should expect an Array of Objects. 
	const [randomRecipe, setRandomRecipe] = useState(null);

	const getRandomRecipes = async () => {
		try {
			const recipe = await fetchRandomRecipes();
			console.log(recipe);
			setRandomRecipe(recipe);
		} catch (error) {
			console.error('Error displaying recipe', error);
		}
	};

	return (
		<div className='App'>
			<Header />
			{/* NOTE: that we MUST pass in the prop called "value" and provide it 
			no other name, or else this will not work as expected. */}
			<RecipeData.Provider value={{ getRandomRecipes, randomRecipe }}>
				<Container />
			</RecipeData.Provider>
		</div>
	);
}

export default App;
