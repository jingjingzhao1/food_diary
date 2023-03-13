import React from "react";
import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {fetchlistByCategory} from '../../server/mealAPI';

const ListByCategory = ()=>{
    const [dataList, setDataList] = useState([]);

    const name = useParams();

    useEffect(() => {
        fetchlistByCategory(name.title).then((items) => {
          setDataList(items);
        }).catch((error) => {
          console.log(error);
        });
      }, [name]);
      
    console.log(dataList);

    return (
        
        <div className="result"
				style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
			{
              dataList.map(category => {
                const { idMeal: id, strMeal: title, strMealThumb: thumbnail} = category;

                return (
                  <Link to = {`/dish/${id}`} className = "category-itm align-center justify-center" key = {id}>
                    <div style={{
							width: "300px",
							padding: "15px",
							borderRadius: "0.5rem",
							boxShadow: "0 4px 21px -12px",
                            backgroundColor:"aliceblue",
                            margin:"5px 10px"
						}}>
                      <img src = {thumbnail} alt = {title} />
                      <h3 >{title}</h3>
                    
                    </div>
                  </Link>
                )
              })
            }
            </div>
            

    )
}

export default ListByCategory;
