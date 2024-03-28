

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard()
{
  
  const pokemon = {
    name: 'bulbasaur',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  };

  
  return (
    <div>
      <figure>
       {pokemon.imgSrc ?
          <img
          src={pokemon.imgSrc}
          alt={`le Pokemon ${pokemon.name}`}
        /> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
}


export default PokemonCard;