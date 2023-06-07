import { useState ,useEffect} from "react";

import useBreedList from "./useBreedList";
import Results from "./Results";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile" ];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  // console.log(location);
  // console.log(pets);

  const requestPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
     setPets(json.pets);
  };
  useEffect(() => {
    requestPets();
  }, []);
  // useEffect(() => {
  //   requestPets();
  // });

  // useEffect(() => {
  //   const fetchPets = async () => {
  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //     );
  //     const json = await res.json();
  //     setPets(json.pets);
  //   };

  //   fetchPets();
  // }, []);

  // ...

  return (
    <div className="search-params">
      <form onSubmit={(e)=>{
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location:
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="location"
          />
        </label>
        <lable>
        Animal:
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return <option key={animal}>{animal}</option>;
            })}
          </select>
        </lable>
        <lable>
        Breed:
          <select
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => {
              return <option key={breed}>{breed}</option>;
            })}
          </select>
        </lable>
        <button type="submit">Search</button>
      </form>



      <Results pets={pets}/>
      {/* {
      <div>
        {pets.length > 0 ? (
          pets.map((pet) => {
            return (<Pet
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              key={pet.id}
            />)
        })
        ) : (
          <p>Loading pets...</p>
        )}
      </div> } */}
      {/* <Load/> */}
      {/* {pets.map((pet) => {
        return (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          />
        );
      })} */}
    </div>
  );
};

export default SearchParams;
