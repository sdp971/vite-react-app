import PropTypes from 'prop-types';

function NavBar({

handlePokemonIndex,
  pokemonList,
}) {
  return (
    <div>
      
        {pokemonList.map((pokemonItem,index) => (
          <button key={pokemonItem.name}  onClick={()=> handlePokemonIndex(index)}>{pokemonItem.name}</button>
        ))}
      </div>
    
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
 handlePokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.PropTypes.arrayOf(
     PropTypes.any
  ).isRequired,
};
export default NavBar;
