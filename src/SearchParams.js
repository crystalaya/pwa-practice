import React, { useState, useEffect, Component } from "react";
import useDropdown from "./useDropdown";
import pet, { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  // a way to use state with hooks
  //hooks (e.g. useState) always return an array with two things: the current state and an updater function
  //cannot be used in conditionals
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  //scheduling the function after the render happens, immediately show something then go to the api to return data
  useEffect(() => {
    pet.breeds("dog").then(console.log, console.error);
  });

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
      </form>
      <button>Submit</button>
    </div>
  );
};

export default SearchParams;
