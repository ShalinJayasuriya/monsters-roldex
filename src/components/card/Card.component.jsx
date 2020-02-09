import React from "react";
import "./card.css";

export const Card = ({ monsters }) => {
  return (
    <div className="card-container">
      <img alt="monsters" src="https://robohash.org/{monsters.id}?set=set2&size=180x180" />
      <h1>{monsters.name}</h1>
      <p>{monsters.email}</p>
    </div>
  );
}