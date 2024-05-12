import React from 'react';
import styles from './Card.module.css';

export default function Card({ recipe }) {
	const { title, image, cheap, vegan, healthScore } = recipe;
	return (
		<div className={styles.card}>
			{title}
			<div>
				<img src={image} alt='recipe' width={150} height={100}></img>
				{vegan ? <h4>Vegan friendly</h4> : null}
				<p>{`Health score ${healthScore}/100`}</p>
			</div>
		</div>
	);
}
