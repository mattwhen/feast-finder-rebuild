import { useContext } from 'react';
import styles from './Recipe.module.css';
import { RecipeData } from './Context';
import Card from '../../../../components/Card/Card';
import Pagination from '../../../pagination/components/Pagination';

export default function RandomRecipe() {
	const { getRandomRecipes, recipeData, currentPage, setCurrentPage } =
		useContext(RecipeData);
	const cardsPerPage = 9;

	return (
		<div className={styles.randomrecipe}>
			{/* TODO: Disable button while data is being fetched */}
			<button onClick={getRandomRecipes}>Generate Random Recipe</button>
			<Pagination
				cards={cardsPerPage}
				cardsPerPage={cardsPerPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
			<div className={styles.grid}>
				{recipeData
					?.slice(
						currentPage * cardsPerPage - cardsPerPage,
						currentPage * cardsPerPage
					)
					.map((item, index) => {
						return (
							<>
								{/* TODO: Wrap a <Link/> over our <Card/> component so when a user
						click on a card, it will re-direct them to a dynamic route based on it's ID.
						 */}
								<Card key={index} recipe={item} />
							</>
						);
					})}
			</div>
		</div>
	);
}
