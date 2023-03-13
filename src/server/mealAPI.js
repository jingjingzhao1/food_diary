import axios from "axios";

export const findByingredient = async (input) => {
	try {
		const response = await axios
			.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`);
	
		return response.data.meals;
	} catch (error) {
		console.log(error);
	}
};

export const listCategory = async () => {
	try {
		const response = await axios
			.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
	
		return response.data.categories;
	} catch (error) {
		console.log(error);
	}
};

export const fetchlistByCategory = async (input) => {
	try {
		console.log("INPUT"+input);
		const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${input}`);
		
		return response.data.meals;
	  } catch (error) {
		console.log('error', error);
	  }
};

export const listOneDish = async (input) => {
	try {
		const response = await axios
			.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${input}`);
	
		return response.data.meals;
	} catch (error) {
		console.log.apply(error);
	}
};






