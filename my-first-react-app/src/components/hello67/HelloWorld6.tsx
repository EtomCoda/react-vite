/** Here we illustrate useEffect for fetching remote data at mount time and 
event driven occasion */
import React, { useState, useEffect } from "react";
import ShowUser from "./ShowUser";
import { UserFetched } from "./type-defs";

type Props = {
  name?: string;
};

const HelloWorld6: React.FC<Props> = ({ name = "Ife" }) => {
  //const [state, setState] = useState(initialState);
  const [userFetched, setUserFetched] = useState<UserFetched>({
    user: null,
    error: null,
  });
    const [userId, setUserId] = useState<string>("1");

    const setUserIdToFetch = (e: any) => {
 
        if (e.target.value.trim()) {
          setUserId(e.target.value);
        }
      };

  const fetchData = async (userId: any) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (response.status < 200 || response.status > 299) {
        setUserFetched({
          user: null,
          error: `No user to display; Response status = ${response.status}`,
        });
        return;
      }
      const data = await response.json();
      setUserFetched({ user: data, error: null });
    } catch (error: any) {
      setUserFetched({ user: null, error: error.message });
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);



  return (
    <div className="flex flex-col space-y-3">
      <p>Hello {name}. Greetings from HelloWorld6.</p>
      <p>
        <input
          type="text"
          placeholder="Write a user id here to fetch ..."
          name="user_id"
          onChange={setUserIdToFetch}
        //   value={userId}
        />
      </p>
      <p>
        <ShowUser userFetched={userFetched} />
      </p>
    </div>
  );
};

export default HelloWorld6;
