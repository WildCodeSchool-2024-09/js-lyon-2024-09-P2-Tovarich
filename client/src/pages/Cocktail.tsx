// import { Link } from "react-router-dom";

// interface cocktailProps {
//   cocktailData: {
//     idDrink: string;
//     strDrink: string;
//     strDrinkThumb: string;
//   };
// }

// function Cocktail({ cocktailData }: cocktailProps) {
//   return (
//     <>
//       <div className="totalCocktail">
//         {cocktailData.map((cocktailDetail) => (
//           <article className="infoCocktail" key={cocktailDetail.idDrink}>
//             <img
//               src={cocktailDetail.strDrinkThumb}
//               alt={cocktailDetail.strDrink}
//             />
//             <h2>{cocktailDetail.strDrink}</h2>

//             <button
//               type="button"
//               onClick={() => console.log(cocktailDetail.idDrink)}
//             >
//               <Link to={`/recipe/${cocktailData.idDrink}`}>
//                 More Information
//               </Link>
//             </button>
//           </article>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Cocktail;
