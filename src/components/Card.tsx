import React from "react";
import { Vehicle } from "../Data/Vehicles";

type CardProps = {
  vehicle: Vehicle;
  onViewDetails: (id: string) => void;
};

const Card: React.FC<CardProps> = ({ vehicle, onViewDetails }) => (
  <div className="card">
    <img className="card-img" src={vehicle.image} alt={vehicle.model} />
    <h3>{vehicle.brand} {vehicle.model}</h3>
    <ul>
      {vehicle.highlights.map((h, i) => (
        <li key={i}>{h}</li>
      ))}
    </ul>
    <button onClick={() => onViewDetails(vehicle.id)}>View Details</button>
  </div>
);

export default Card;
