import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { listOneDish } from "../../server/mealAPI";
import { useStateContext } from "../../components/cart/CartList";

const Dish = () => {
	const id = useParams();
	const [dish, setDish] = useState("");
    const { onAdd } = useStateContext();
/*
	useEffect(() => {
		listOneDish(id.id)
			.then((items) => {
				setDish(items[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);
    <button onClick={onAdd(()=>dish.strMeal,ingredientList)}>Add To Cart</button>
*/
    useEffect(() => {
        const getDish = async () => {
          const data = await listOneDish(id.id);
          setDish(data[0]);
        };
    
        getDish();
      }, [id]);

	const ingredientList = [
		dish.strIngredient1,
		dish.strIngredient2,
		dish.strIngredient3,
		dish.strIngredient4,
		dish.strIngredient5,
		dish.strIngredient6,
		dish.strIngredient7,
		dish.strIngredient8,
		dish.strIngredient9,
		dish.strIngredient10,
		dish.strIngredient11,
		dish.strIngredient12,
		dish.strIngredient13,
		dish.strIngredient14,
		dish.strIngredient15,
		dish.strIngredient16,
		dish.strIngredient17,
		dish.strIngredient18,
		dish.strIngredient19,
		dish.strIngredient20,
	];

    const handleAddToCart = () => {
        onAdd(dish.strMeal, ingredientList);
      };
            
    

	return (
		<div >
			<h4 class="recipe-title">{dish.strMeal}</h4>
			<p class="recipe-category">Category: {dish.strCategory}</p>
            <p class="recipe-category">Area: {dish.strArea}</p>
            <div claas="ingredientList"> 
                <h4>Ingredient List:</h4>
                {ingredientList.map((item,index ) => {
                    return item === "" ? item : `${item}, `;
                })}
            </div>
            <button onClick={handleAddToCart}>Add To Cart</button>
			<div class="recipe-instruct">
				<h4 class="recipe-inctruction">Instruction:</h4>
				<p>{dish.strInstructions}</p>
			</div>
			<div class="recipe-dish-img">
				<img
					src={dish.strMealThumb}
					alt={dish.strMeal}
				/>
			</div>
			<div class="recipe-link">
				<a href={dish.strYoutube}>Watch Video</a>
			</div>
		</div>
	);
};

export default Dish;
