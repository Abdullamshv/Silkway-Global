import { useEffect, useState } from "react";
import React from "react";

export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await res.json();
        setUserData(data); 
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <div>Home</div>
      <h2>Data from API:</h2>
      {userData ? (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
