import { useState } from "react";

export default function ListGroup() {
  let items = ["New York", "New Jersey", "Lagos", "Abuja", "Port Harcourt"];
  const [selectedIndex,setSelectedIndex] = useState(5);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active': 'list-group-item'}
            key={index}
            onClick={()=> setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      
    </>
  );
}

