// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../components/Header";

// function Recipe() {
//   const [cocktailRecipe, setRecipe] = useState([]);
//   useEffect(() => {
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/${idDrink}`)
//       .then((res) => res.json())
//       .then((recipe) => setRecipe(recipe.drinks));
//   }, []);
//   const { idDrink } = useParams();
//   return (
//     <>
//       <Header />

//       {cocktailRecipe.length === 0 ? (
//         <p>Loading</p>
//       ) : (
//         <p>{cocktailRecipe[0]}</p>
//       )}
//       <h1>hello recipe</h1>
//     </>
//   );
// }

// export default Recipe;
