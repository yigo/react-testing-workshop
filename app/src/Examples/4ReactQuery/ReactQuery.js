import React from 'react';
import { useQuery } from "react-query";
import axios from "axios";

const counterFetch = (key) => axios.get(
  "http://localhost:3001/api/v1/counter"
  ).then(response => response.data);

function App() {
  const { status, data, error } = useQuery("counters",counterFetch, {
    refetchOnWindowFocus: 0,
  });

  return (
   <>
      {status === "loading" && (<p>counters are loading...</p>)}
      {status === "error" && (<p>{error}</p>)}
      {status === "success" && (
      <ul>
        {data.map(({ title, id }) => (<li key={id}>{title}</li>))}
      </ul>
    )}
   </>
  );
}
export default App;
