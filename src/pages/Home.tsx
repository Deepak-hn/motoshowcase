import React, { useState } from "react";
import HomeHero from "../components/HomeHero";
import Card from "../components/Card";
import DetailsModal from "../components/DetailsModal";
import { vehicles, Vehicle } from "../Data/Vehicles";

const Home: React.FC = () => {
  const [selected, setSelected] = useState<Vehicle | null>(null);

  return (
    <div>
      <HomeHero />
      <div className="card-grid">
        {vehicles.slice(0, 3).map((v: Vehicle) =>
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

export default Home;
