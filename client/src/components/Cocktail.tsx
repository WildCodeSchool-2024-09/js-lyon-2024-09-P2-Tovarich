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
      {cocktailData.map((cocktailDetail) => (
        <div className="infoCocktail" key={cocktailDetail.name}>
          <article>
            {cocktailDetail.image}
            <figcaption>{cocktailDetail.name}</figcaption>
            <button type="button">More Information</button>
          </article>
        </div>
      ))}
    </>
  );
}

export default Cocktail;
