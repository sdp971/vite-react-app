import PropTypes from 'prop-types';

function NavBar({
  pokemonIndex,
  handleClickBefore,
  handleClickNext,
  pokemonList,
}) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickBefore}>Précédent</button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickNext}>Suivant</button>
      ) : null}
    </div>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  handleClickBefore: PropTypes.func.isRequired,
  handleClickNext: PropTypes.func.isRequired,
  pokemonList: PropTypes.PropTypes.arrayOf(
     PropTypes.any
  ).isRequired,
};
export default NavBar;
