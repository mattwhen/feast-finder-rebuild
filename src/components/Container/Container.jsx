import React from 'react';
import styles from './Container.module.css';
import RecipeContainer from '../RecipeContainer/RecipeContainer';

export default function Container() {
	return (
		<div className={styles.container}>
			<RecipeContainer />
		</div>
	);
}
