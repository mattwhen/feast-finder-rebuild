import { useState, useContext } from 'react';
import styles from './RandomRecipe.module.css';
import { RecipeData } from './Context';
import Card from '../../../../components/Card/Card';

export default function RandomRecipe() {
	const { getRandomRecipes, randomRecipe } = useContext(RecipeData);
	const [startingIndex, setStartingIndex] = useState(0);
	const [endingIndex, setEndingIndex] = useState(10);

	function handleRendering() {
		console.log(randomRecipe.length, endingIndex);
		if (endingIndex >= randomRecipe.length) {
			return null;
		} else {
			setEndingIndex(endingIndex + 10);
		}
	}
	return (
		<div className={styles.randomrecipe}>
			<h2>Not sure what recipe to make?</h2>
			<button onClick={getRandomRecipes}>Generate Random Recipe</button>
			<div className={styles.container}>
				{randomRecipe?.slice(startingIndex, endingIndex).map((item) => {
					return (
						<>
							<Card recipe={item}></Card>
						</>
					);
				})}
			</div>
			{randomRecipe ? (
				<button
					onClick={handleRendering}
					className={
						endingIndex >= randomRecipe.length
							? `${styles.test}`
							: `${styles.test2}`
					}
				>
					Load more...
				</button>
			) : null}
		</div>
	);
}
