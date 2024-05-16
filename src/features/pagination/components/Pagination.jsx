import { useContext } from 'react';
import { RecipeData } from '../../getRandomRecipe/components/Recipe/Context';
import styles from './Pagination.module.css';

export default function Pagination({
	cards,
	cardsPerPage,
	currentPage,
	setCurrentPage,
}) {
	const { recipeData } = useContext(RecipeData);
	const paginationButtons = [];

	if (recipeData) {
		for (let i = 1; i <= recipeData.length / cards; i++) {
			paginationButtons.push(i);
		}
		console.log(paginationButtons);
	}

	function handlePagination(page) {
		setCurrentPage(page);
	}

	return (
		<div>
			{recipeData
				? paginationButtons.map((page) => (
						<button
							key={page}
							onClick={() => handlePagination(page)}
							className={currentPage === page ? styles.active : ''}
						>
							{page}
						</button>
				  ))
				: null}
		</div>
	);
}
