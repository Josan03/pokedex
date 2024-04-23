import React from "react";

export default function Card({ pokeData, loading, onCardClick}) {
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        pokeData.map((item) => {
          return (
            <>
              <div className="card" onClick={() => onCardClick(item)}>
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="pokemon_image" />
                <h2>{item.name}</h2>
              </div>
            </>
          )
        })
      )}
    </>
  );
}