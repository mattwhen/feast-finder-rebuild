import React, { useContext } from 'react';
import RandomRecipe from '../../features/getRandomRecipe/components/RandomRecipe/RandomRecipe';
import styles from './RecipeContainer.module.css';
import Card from '../Card/Card';

export default function RecipeContainer() {
	return (
		<div className={styles.container}>
			<h2>Not sure what recipe to make?</h2>
			<RandomRecipe />
		</div>
	);
}
