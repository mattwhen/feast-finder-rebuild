import { useState, useContext } from 'react';
import styles from './RandomRecipe.module.css';
import { RecipeData } from './Context';
import Card from '../../../../components/Card/Card';
import Pagination from '../../../pagination/components/Pagination';

export default function RandomRecipe() {
	const { getRandomRecipes, randomRecipe } = useContext(RecipeData);
	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const cardsPerPage = 9; 

	return (
		<div className={styles.randomrecipe}>
			<button onClick={getRandomRecipes}>Generate Random Recipe</button>
			{/* TODO: create Pagination button here. */}
			<Pagination cards={cardsPerPage} cardsPerPage={cardsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<div className={styles.grid}>
				{/* Render Card component data here */}
				{randomRecipe?.slice(currentPage * cardsPerPage - cardsPerPage, currentPage * cardsPerPage).map((item) => {
					return (
						<>
							<Card recipe={item}></Card>
						</>
					);
				})}
			</div>
		</div>
	);
}
