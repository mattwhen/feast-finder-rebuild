import React, { useContext } from 'react';
import RandomRecipe from '../../features/getRandomRecipe/components/RandomRecipe/RandomRecipe';
import styles from './RecipeContainer.module.css';
import Card from '../Card/Card';

export default function RecipeContainer() {
  const randomRecipe = useContext(RandomRecipe);

  return (
    <div className={styles.container}>
     <RandomRecipe />
    </div>
  );
}
