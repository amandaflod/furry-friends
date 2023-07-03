import { CatList } from "./components/CatList";

export type Cat = {
  name: string;
  dateOfBirth: Date;
  gender: string;
  bio: string;
  image: File | null;
};

const App = () => {
  return <CatList />;
};

export default App;
