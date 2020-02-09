import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/Card.component";

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {
        monsters.map(user => (
          <Card key={user.id} monsters={user} />
        ))
      }
    </div>
  );
}

export default CardList;
