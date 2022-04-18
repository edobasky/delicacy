import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom"
import {Grid, CardGrid} from "../components/_styled"


function Searched() {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) =>{
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=335844e247d94e4aad0753657efbd04e&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  }

  useEffect(() => {
    getSearched(params.search)
    
  },[params.search])

  
  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <CardGrid key={item.id}>
           <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt={item.title}/>
            <h4>{item.title}</h4>
            </Link>
          </CardGrid>
        )
      })}
    </Grid>
  )
}

export default Searched