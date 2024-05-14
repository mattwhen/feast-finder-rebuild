import { useContext } from 'react';
import { RecipeData } from '../../getRandomRecipe/components/RandomRecipe/Context';
import styles from './Pagination.module.css';

export default function Pagination({ cards, cardsPerPage, currentPage, setCurrentPage,  }) {
	const { randomRecipe } = useContext(RecipeData);
	const paginationButtons = [];

	if (randomRecipe) {
		for (let i = 1; i <= randomRecipe.length / cards; i++) {
			paginationButtons.push(i);
		}
    console.log(paginationButtons);
	}

  function handlePagination(page) {
    setCurrentPage(page);
    
  }

	return (
		<div>
			{randomRecipe
				? paginationButtons.map((page) => (
						<button key={page} onClick={() => handlePagination(page)} className={currentPage === page ? styles.active : ''}>{page}</button>
				  ))
				: null}
		</div>
	);
}
