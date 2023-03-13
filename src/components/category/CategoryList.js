import React from "react";
import { useState } from "react";
import { listCategory } from "../../server/mealAPI";
import { Link } from "react-router-dom";

const CategoryList = () => {
	const [dataList, setDataList] = useState([]);

	listCategory().then((items) => {
		setDataList(items);
	});
	return (
		<div className="section-wrapper bg-whitesmoke">
			<div className="container">
				<div className="sc-title">categories</div>
				<section
					className="sc-category grid"
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
					}}
				>
					{dataList.map((category) => {
						const {
							idCategory: id,
							strCategory: title,
							strCategoryThumb: thumbnail,
						} = category;

						return (
							<Link
								to={`/meal/category/${title}`}
								className="category-itm align-center justify-center"
								key={id}
							>
								<div
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
										src={thumbnail}
										alt={title}
									/>
									<div className="category-itm-title ">
										<h3 className="fs-11 fw-6 ls-1 text-uppercase">{title}</h3>
									</div>
								</div>
							</Link>
						);
					})}
				</section>
			</div>
		</div>
	);
};

export default CategoryList;
