// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.tsx
import React from "react";

import { User, Role } from "./User";
import { Cat, CatColor } from "./Cat";

const user = {
  id: "u1",
  email: "john.doe@kindacode.com",
  age: 34,
  isMarried: false,
  role: Role.member,
  skills: ["React", "Node.js", "MySQL"],
  doSomething: () => {
    console.log(`Hello ${user.email}`);
  },
};

const cat = {
  id: "cat1",
  name: "Tom",
  age: 4,
  color: CatColor.tabby,
  meow: () => {
    console.log("meooow");
  },
};

const App = () => {
  return (
    <div>
      <User
        id={user.id}
        email={user.email}
        age={user.age}
        isMarried={user.isMarried}
        role={user.role}
        skills={user.skills}
        doSomething={user.doSomething}
      />
      <Cat
        id={cat.id}
        name={cat.name}
        age={cat.age}
        color={cat.color}
        meow={cat.meow}
      />
    </div>
  );
};

export default App;
