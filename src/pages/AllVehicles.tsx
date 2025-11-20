import React, { useState } from "react";
import Card from "../components/Card";
import DetailsModal from "../components/DetailsModal";
import { vehicles, Vehicle } from "../Data/Vehicles";

const AllVehicles: React.FC = () => {
  const [selected, setSelected] = useState<Vehicle | null>(null);

  return (
    <div>
      <h2>All Vehicles</h2>
      <div className="card-grid">
        {vehicles.map((v: Vehicle) =>
          <Card
            key={v.id}
            vehicle={v}
            onViewDetails={(id: string) => setSelected(vehicles.find((veh: Vehicle) => veh.id === id) || null)}
          />
        )}
      </div>
      {selected && <DetailsModal vehicle={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default AllVehicles;
