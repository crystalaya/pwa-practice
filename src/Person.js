import React from "react";

//destructuring
export default function Person({ name, position, food }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{position}</h2>
      <h2>{food}</h2>
    </div>
  );
}
