import { useEffect, useState } from "react"
import {Grid, CardGrid} from "../components/_styled"
// import {motion} from "framer-motion"
import { useParams} from "react-router-dom"



function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  

  const getCuisine = async (name) => {

      const check = localStorage.getItem(params.type);
    if (check) {
      setCuisine(JSON.parse(check));
    }else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=335844e247d94e4aad0753657efbd04e&cuisine=${name}`
      );
      const recipes = await data.json();
      localStorage.setItem(params.type, JSON.stringify(recipes.results));
      setCuisine(recipes.results);
    }

    
  };

    useEffect(() => {
       getCuisine(params.type);
     // console.log(params);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.type]);



  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <CardGrid key={item.id}>
            <img src={item.image} alt={item.title}/>
            <h4>{item.title}</h4>
          </CardGrid>
        )
      })}
    </Grid>
  )
}

export default Cuisine