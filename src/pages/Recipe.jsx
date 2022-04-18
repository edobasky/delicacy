/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Info,Button,DetailWrapper} from "../components/_styled"

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
       // const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=335844e247d94e4aad0753657efbd04e`);
        const detailData = await data.json();
        setDetails(detailData);
    }

   
    useEffect(() => {
        fetchDetails();
    },[params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>
          {details.title}
        </h2>
        <img src={details.image} alt={details.title}/>
      </div>
      <Info>
        <Button
         className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab("instructions")}>
          Instructions
          </Button>
        <Button
         className={activeTab === 'ingredients' ? 'active' : ''} 
         onClick={() => setActiveTab("ingredients")}>
         Ingredients
         </Button>

         {activeTab === "instructions" && (
          <div>
           <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
           <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
         </div>
         )}

         {activeTab === "ingredients" && (
          <ul>
           {details.extendedIngredients.map((ingredient) => (
             <li key={ingredient.id}>{ingredient.original}</li>
           ))}
         </ul>
         )}
      </Info>
    </DetailWrapper>
  );
} 


export default Recipe