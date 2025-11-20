export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  type: "car" | "bike";
  image: string;
  specs: {
    engine: string;
    topSpeed: string;
    price: string;
  };
  highlights: string[];
};

export const vehicles: Vehicle[] = [
  {
    id: "1",
    brand: "Porsche",
    model: "911 Carrera",
    type: "car",
    image: "/images/porsche-911.jpg",
    specs: {
      engine: "3.0L Twin-turbocharged H6",
      topSpeed: "293 km/h",
      price: "₹1.8 Crore",
    },
    highlights: ["Iconic design", "Turbocharged engine", "Rear-engine layout"],
  },
  {
    id: "2",
    brand: "Ferrari",
    model: "F8 Tributo",
    type: "car",
    image: "/images/ferrari-f8.jpg",
    specs: {
      engine: "3.9L Twin-turbo V8",
      topSpeed: "340 km/h",
      price: "₹4 Crore",
    },
    highlights: ["Extremely powerful", "Aerodynamic body", "Signature Ferrari sound"],
  },
  {
    id: "3",
    brand: "Ducati",
    model: "Panigale V4",
    type: "bike",
    image: "/images/ducati-v4.jpg",
    specs: {
      engine: "1103 cc V4",
      topSpeed: "299 km/h",
      price: "₹28 Lakh",
    },
    highlights: ["Racing DNA", "Lightweight", "Superb handling"],
  },
  {
    id: "4",
    brand: "Harley-Davidson",
    model: "Iron 883",
    type: "bike",
    image: "/images/harley-iron883.jpg",
    specs: {
      engine: "883 cc V-Twin",
      topSpeed: "165 km/h",
      price: "₹11 Lakh",
    },
    highlights: ["Classic cruiser", "Raw sound", "Customizable"],
  },
  {
    id: "5",
    brand: "KTM",
    model: "390 Duke",
    type: "bike",
    image: "/images/ktm-390duke.jpg",
    specs: {
      engine: "373 cc Single-cylinder",
      topSpeed: "167 km/h",
      price: "₹3.2 Lakh",
    },
    highlights: ["Aggressive styling", "Lightweight", "Great for street"],
  }
];
