import { useState, useEffect } from "react";
import Character from "./Character";

function List() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await response.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [characters.length]);
  return (
    <div>
      <h2>Characters</h2>

      <div className="row">
        {loading ? (
          <div>Loading...</div>
        ) : (
          characters.map((character) => (
            <Character
              key={character.id}
              name={character.name}
              origin={character.origin}
              image={character.image}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default List;
