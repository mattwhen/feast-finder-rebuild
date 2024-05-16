import React, { useContext } from 'react';
import { RecipeData } from '../../../features/getRandomRecipe/components/Recipe/Context';

export default function SearchBar() {
	const { value, setValue, searchRecipe, setCurrentPage } =
		useContext(RecipeData);

	function handleValue(e) {
		setValue(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		searchRecipe(value);
		setCurrentPage(1);
	}

	return (
		<div>
			<form action='' onSubmit={handleSubmit}>
				<input
					type='text'
					onChange={handleValue}
					placeholder='Search all foods...'
				/>
			</form>
		</div>
	);
}
