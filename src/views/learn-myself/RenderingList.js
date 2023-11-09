import React from "react";

const cars = [
  { name: "lambo", id: 1, isSuperCar: true },
  { name: "supra", id: 2, isSuperCar: true },
  { name: "gtr", id: 3, isSuperCar: false },
  { name: "mclaren", id: 4, isSuperCar: true },
  { name: "mercedes", id: 11, isSuperCar: false },
];

function RenderingList() {
  let listCar = cars.map((car) => (
    <li
      key={car.id}
      style={{
        color: car.isSuperCar ? "red" : "green",
      }}
    >
      {car.name}
    </li>
  ));

  return <ul>{listCar}</ul>;
}

export default RenderingList;
