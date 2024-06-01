import HelloWorld from "./components/HelloWorld";
import React from "react";
import HelloWorld2 from "./components/HelloWorld2";
import HelloWorld3 from "./components/HelloWorld3";
import HelloWorld4 from "./components/HelloWorld4";
import HelloWorld5 from "./components/HelloWorld5";
import HelloWorld6 from "./components/hello67/HelloWorld6";
import HelloWorld7 from "./components/hello67/HelloWorld7";
import HelloWorld8 from "./components/HelloWorld8";
const App: React.FC = () => {
  return (
    <>
      <div className="bg-blue-100 h-48 flex justify-center items-center">
        <HelloWorld />
      </div>

      <div className="bg-red-100 h-48 flex justify-center items-center p-10">
        <HelloWorld2 name="Etom" />
      </div>

      <div className="bg-orange-300 h-full flex  justify-center items-center">
        <div className="bg-yellow-100 flex h-48 w-full p-6">
          <HelloWorld3 />
        </div>
        <div className="bg-green-300 flex h-48 w-full p-6">
          <HelloWorld4 />
        </div>
      </div>
      <div className="bg-violet-300 flex h-48 w-full p-6">
        <HelloWorld5 />
      </div>
      <div className="bg-yellow-300 h-full flex  justify-center items-center">
        <div className="bg-green-300 flex h-u w-full p-6">
          <HelloWorld6 />
        </div>
        <div className="bg-blue-300 flex h-auto w-full p-6">
          <HelloWorld7 />
        </div>
      </div>
      <div className="bg-orange-300 flex h-48 w-full p-6">
        <HelloWorld8/>
      </div>
    </>
  );
};

export default App;
