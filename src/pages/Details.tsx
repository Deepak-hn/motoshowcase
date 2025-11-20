// Optional: dedicated page, not modal. (You can skip if using only modal for details.)
import React from "react";
import { useParams } from "react-router-dom";
import { vehicles } from "../Data/Vehicles";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicles.find(v => v.id === id);

  if (!vehicle) return <div>Vehicle not found</div>;

  return (
    <div>
      <img src={vehicle.image} alt={vehicle.model} />
      <h2>{vehicle.brand} {vehicle.model}</h2>
      <ul>
        <li><b>Engine:</b> {vehicle.specs.engine}</li>
        <li><b>Top Speed:</b> {vehicle.specs.topSpeed}</li>
        <li><b>Price:</b> {vehicle.specs.price}</li>
      </ul>
      <h4>Highlights:</h4>
      <ul>
        {vehicle.highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </div>
  );
};

export default Details;
