import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function PokemonDetail() {
  const { id } = useParams();

  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const data = res.data;

        setAbilities(data.abilities);
        setMoves(data.moves);
      } catch (err) {
        toast.error("Not Found!", {
          position: toast.POSITION.TOP_CENTER,
          toastId: "fetchPokemonDetailError",
        });
      }
    };

    fetchPokemonDetail();
  }, [id]);

  return (
    <div>
      {abilities.length !== 0 && <h1>Abilities:</h1>}
      {abilities.map((item, idx) => (
        <p key={idx}>{item.ability.name}</p>
      ))}

      {moves.length !== 0 && <h1>Moves:</h1>}
      {moves.map((item, idx) => (
        <p key={idx}>{item.move.name}</p>
      ))}
    </div>
  );
}

export default PokemonDetail;
