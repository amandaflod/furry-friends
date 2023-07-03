import { Cat } from "../App";
import styled from "styled-components";

type CatCardProps = {
  cat: Cat;
  removeCat: (cat: Cat) => void;
};

const CardWrapper = styled.li`
width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: whitesmoke;
  list-stylin
`;

const StyledImage = styled.img`
  width: 200px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CatCard: React.FC<CatCardProps> = ({ cat, removeCat }) => {
  const handleRemove = () => {
    removeCat(cat);
  };
  return (
    <CardWrapper>
      {cat.image && (
        <StyledImage src={URL.createObjectURL(cat.image)} alt="Cat" />
      )}
      <TextWrapper>
        <div>Name: {cat.name}</div>
        <div>
          Date of Birth:{" "}
          {cat.dateOfBirth ? cat.dateOfBirth.toDateString() : "Unknown"}
        </div>
        <div>Gender: {cat.gender}</div>
        <div>Bio: {cat.bio}</div>
      </TextWrapper>
      <button onClick={handleRemove}>Remove</button>
    </CardWrapper>
  );
};
