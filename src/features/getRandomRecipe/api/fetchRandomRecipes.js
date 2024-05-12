const API_KEY  = 'db797c14a8f74d1486063c3da2bc19ed';

export const fetchRandomRecipes = async () => {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/random?number=100&apiKey=${API_KEY}`);
        const data = await res.json();
        return data.recipes;
    } catch (error) {
        console.error('Error fetching Recipe!', error);
    }
}