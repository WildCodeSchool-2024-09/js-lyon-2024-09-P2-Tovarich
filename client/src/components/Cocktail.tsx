interface cocktailInfo {
  image: string;
  name: string;
}

interface cocktailListe {
  cocktailData: cocktailInfo[];
}

function Cocktail({ cocktailData }: cocktailListe) {
  return (
    <>
      <div className="totalCocktail">
        {cocktailData.map((cocktailDetail) => (
          <article className="infoCocktail" key={cocktailDetail.name}>
            <img src={cocktailDetail.image} alt="" />
            <h2>{cocktailDetail.name}</h2>
            <button type="button">More Information</button>
          </article>
        ))}
      </div>
    </>
  );
}

export default Cocktail;
