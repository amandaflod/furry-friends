import { useEffect, useState } from "react";
import styled from "styled-components";
import { Cat } from "../App";
import { CatCard } from "./CatCard";
import { CatForm } from "./CatForm";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Heading = styled.h1`
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
export const CatList = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  useEffect(() => {
    const existingCatsJSON = localStorage.getItem("cats");
    const existingCats = existingCatsJSON ? JSON.parse(existingCatsJSON) : [];

    const catsWithDateOfBirth = existingCats.map((cat: Cat) => ({
      ...cat,
      dateOfBirth: new Date(cat.dateOfBirth),
    }));

    setCats(catsWithDateOfBirth);
  }, []);

  const addCat = (cat: Cat) => {
    // Retrieve existing cats from local storage or initialize an empty array
    const existingCatsJSON = localStorage.getItem("cats");
    const existingCats = existingCatsJSON ? JSON.parse(existingCatsJSON) : [];

    // Add the new cat to the array
    const updatedCats = [...existingCats, cat];

    // Save the updated cats array to local storage
    localStorage.setItem("cats", JSON.stringify(updatedCats));

    setCats((prevCats) => [...prevCats, cat]);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const removeCat = (cat: Cat) => {
    const updatedCats = cats.filter((c) => c !== cat);

    setCats(updatedCats);

    localStorage.setItem("cats", JSON.stringify(updatedCats));
  };

  return (
    <Wrapper>
      <Heading>Furry Friends</Heading>
      {showForm ? (
        <CatForm addCat={addCat} closeForm={closeForm} />
      ) : (
        <List>
          {cats.map((cat, index) => (
            <CatCard key={index} cat={cat} removeCat={removeCat} />
          ))}
        </List>
      )}
      <button onClick={toggleForm}>
        {showForm ? "Close Form" : "Add Cat"}
      </button>
    </Wrapper>
  );
};
