import React from "react";
import { Vehicle } from "../Data/Vehicles";

type DetailsModalProps = {
  vehicle: Vehicle;
  onClose: () => void;
};

const DetailsModal: React.FC<DetailsModalProps> = ({ vehicle, onClose }) => (
  <div className="modal-backdrop" onClick={onClose}>
    <div className="modal" onClick={e => e.stopPropagation()}>
      <button onClick={onClose}>Close</button>
      <img src={vehicle.image} alt={vehicle.model} />
      <h2>{vehicle.brand} {vehicle.model}</h2>
      <p>Type: {vehicle.type}</p>
      <ul>
        <li><b>Engine:</b> {vehicle.specs.engine}</li>
        <li><b>Top Speed:</b> {vehicle.specs.topSpeed}</li>
        <li><b>Price:</b> {vehicle.specs.price}</li>
      </ul>
      <h4>Highlights:</h4>
      <ul>
        {vehicle.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default DetailsModal;
