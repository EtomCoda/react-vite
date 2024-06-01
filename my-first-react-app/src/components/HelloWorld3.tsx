// src/components/HelloWorld3.tsx
import React, { useState } from 'react';

type HelloWorld3Props = {
  name?: string;
}

const HelloWorld3: React.FC<HelloWorld3Props> = ({ name = "Tona" }) => {
  const [nameToGreet, setNameToGreet] = useState(name);

  const changeNameToGreet = (event:any) => {
    setNameToGreet(event.target.value);
  };

  return (
    <div className='flex flex-col space-y-3'>
      <p>Hello {nameToGreet}. Greetings from HelloWorld3.</p>
      <p>
        <input
          type="text"
          placeholder="Write a name here..."
          name="name_to_greet"
          onChange={changeNameToGreet}
        />
      </p>
    </div>
  );
};

export default HelloWorld3;
