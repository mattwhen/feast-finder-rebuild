const API_KEY  = 'db797c14a8f74d1486063c3da2bc19ed';

export const recipeSearch = async (query) => {
	try {
		const res = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=100&apiKey=${API_KEY}`, 
            {
                'Content-Type': 'application/json'
            }
		);
		const data = await res.json();
		return data.results;
	} catch (error) {
		console.error('Error querying recipes', error);
	}
};
