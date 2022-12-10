// User.tsx
import React from "react";
import { Wrapper } from "./Wrapper";

export enum Role {
  member = "member",
  staff = "staff",
  admin = "admin",
}

interface UserProps {
  id: string;
  email: string;
  age?: number;
  isMarried?: boolean;
  role: Role;
  skills?: string[];
  doSomething: React.MouseEventHandler;
}

export const User = ({
  id,
  email,
  age,
  isMarried,
  role,
  skills,
  doSomething,
}: UserProps) => {
  return (
    <Wrapper>
      <p>Id: {id}</p>
      <p>Email: {email}</p>
      {age && <p>Age: {age}</p>}
      {isMarried && <p>Is Married: {isMarried}</p>}
      <p>Role: {role}</p>
      {skills && (
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      )}

      <button onClick={doSomething} style={{ padding: "15px 40px" }}>
        Do something
      </button>
    </Wrapper>
  );
};
