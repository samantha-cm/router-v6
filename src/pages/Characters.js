import { Link, Outlet } from "react-router-dom";

const Characters = ({ allCharacters }) => {
  //   const dataC = props.allCharacters.characters;
  const { characters } = allCharacters;
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          style={{
            height: "700px",
            width: "400px",
            overflow: "scroll",
          }}
        >
          <h1>Characters</h1>
          <br />
          {characters.map((character) => (
            <Link key={character.id} to={`/characters/${character.id}`}>
              <p>{character.name}</p>
            </Link>
          ))}
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Characters;
