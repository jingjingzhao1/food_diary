import React from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { useState } from "react";
import { findByingredient } from "../../server/mealAPI";

const SearchBar = () => {
	const [inputText, setInputText] = useState("");
	const [dataList, setDataList] = useState([]);

	const handleInputChange = (e) => {
		e.preventDefault();
		setInputText(e.target.value);
	};
	const handleSearch = (e) => {
		e.preventDefault(); // prevent default form submission behavior
		findByingredient(inputText).then((items) => {
			setDataList(items);
		});
	};

	return (
		<div>
			<form className="search-bar flex justify-center">
				<input
					type="text"
					className="search-bar-input"
					style={{
						borderRadius: "0.5rem",
						border: "1px solid #ccc",
						margin: "1rem",
						padding: "0.5rem",
					}}
					placeholder="Search food..."
					onChange={handleInputChange}
				/>
				<button
					type="submit"
					className="form-submit-btn"
					onClick={handleSearch}
				>
					<BsFillSearchHeartFill
						className="btn-icon"
						size={20}
					/>
				</button>
			</form>
			<div
				className="result"
				style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
			>
				{dataList.map((item) => (
					<div
						key={item.idMeal}
						data={item}
						style={{
							width: "300px",
							padding: "15px",
							borderRadius: "0.5rem",
							boxShadow: "0 4px 21px -12px",
							backgroundColor: "aliceblue",
							margin: "5px 10px",
						}}
					>
						<img
							src={item.strMealThumb}
							alt={item.strMeal}
						/>
						<h3>{item.strMeal}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchBar;
