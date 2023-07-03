import { useState } from "react";
import { styled } from "styled-components";
import { Cat } from "../App";

const OuterWrapper = styled.div`
  margin-top: 40px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

type CatFormProps = {
  addCat: (cat: Cat) => void;
  closeForm: () => void;
};

export const CatForm: React.FC<CatFormProps> = ({ addCat, closeForm }) => {
  const [name, setName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [gender, setGender] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCat = {
      name,
      dateOfBirth: dateOfBirth || new Date(),
      gender,
      bio,
      image,
    };

    addCat(newCat);

    setName("");
    setDateOfBirth(null);
    setGender("");
    setBio("");
    setImage(null);

    closeForm();
  };

  return (
    <OuterWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Cat Name"
        />
        <input
          type="date"
          value={dateOfBirth ? dateOfBirth.toISOString().slice(0, 10) : ""}
          onChange={(e) => setDateOfBirth(new Date(e.target.value))}
          placeholder="Date of Birth"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Date of Birth"
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          accept="image/*"
        />
        <button type="submit">Add Cat</button>
      </FormWrapper>
    </OuterWrapper>
  );
};
