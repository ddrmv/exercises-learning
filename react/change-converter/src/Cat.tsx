import { CatWrrapper } from "./CatWrapper";

export enum CatColor {
  black = "black",
  white = "white",
  tabby = "tabby",
}

export interface CatProps {
  id: string;
  name: string;
  age: number;
  color: CatColor;
  meow: React.MouseEventHandler;
}

export const Cat = ({ id, name, age, color, meow }: CatProps) => {
  return (
    <CatWrrapper>
      <p>Cat id: {id}</p>
      <p>Cat name: {name}</p>
      <p>Cat age: {age}</p>
      <p>Cat color: {color}</p>
      <button onClick={meow}>Make noise</button>
    </CatWrrapper>
  );
};
