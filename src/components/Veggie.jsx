import {Wrapper,Card,Gradient} from "./_styled"
import { useEffect, useState } from "react";
import {Splide,SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import {Link} from "react-router-dom"



function Veggie() {
  const [veggie, setVeggie] = useState([])

  useEffect(() => {
      getVeggie();
  },[]);
  

  const getVeggie = async () => {

      const check = localStorage.getItem("veggie");
      if(check) {

          setVeggie(JSON.parse(check));
          
      }else {

          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=335844e247d94e4aad0753657efbd04e&number=12&tags=vegetarian`);
          const data = await api.json();
          localStorage.setItem("veggie", JSON.stringify(data.recipes));
          setVeggie(data.recipes);
      } 
     
  }


  return (
    <div>
        <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide
            options={{
                perPage:3,
                 arrows: false,
                 pagination: false,
                 drag: "free",
                 gap:"5rem"
            }}
        >
        {veggie.map((recipe) => {      
               return (
                   <SplideSlide key={recipe.id}>
                   <Link to={"/recipe/" + recipe.id}>
                   <Card >
                     <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
                    <Gradient />
                    </Card>
                    </Link>
                   </SplideSlide>
                
               )       
        })}
        </Splide>
    </Wrapper>
    </div>
  )
}

export default Veggie