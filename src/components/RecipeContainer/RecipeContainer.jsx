import RandomRecipe from '../../features/getRandomRecipe/components/Recipe/Recipe';
import styles from './RecipeContainer.module.css';

export default function RecipeContainer() {
	return (
		<div className={styles.container}>
			<h2>Not sure what recipe to make?</h2>
			<RandomRecipe />
		</div>
	);
}
