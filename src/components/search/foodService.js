// const APIKEY = "66a072032d914d08929e8232de1fde63";


// getFood = async (e) => {
//     const food = e.target.elements.foodName.value + "";

//     const foodUrl = `https://api.spoonacular.com/food/ingredients/search?query=${food}&apiKey=${APIKEY}`;

//     e.preventDefault();
//     const apiCall = await fetch(foodUrl);

//     const data = await apiCall.json();
//     this.setState({ foods: data.results })
//     console.log(this.state.foods);
// }