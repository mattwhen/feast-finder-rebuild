import React from 'react';
import styles from './Container.module.css';
import RandomRecipe from '../../features/getRandomRecipe/components/RandomRecipe/RandomRecipe';
import RecipeContainer from '../RecipeContainer/RecipeContainer';

export default function Container({ recipe }) {
	return (
		<div className={styles.container}>
			<RecipeContainer />
		</div>
	);
}
