// src/components/HelloWorld2.tsx
import React from 'react';

type HelloWorld2Props = {
  name: string;
  other?: string; // The question mark means that this is optional
}

const HelloWorld2: React.FC<HelloWorld2Props> = (props) => {
  return (
    <>
      <p>Hello {props.name}.Youre the propety that has been passed. Greetings from Helloworld2 with TypeScript</p>
    </>
  );
};

export default HelloWorld2;
