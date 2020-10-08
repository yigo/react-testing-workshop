import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [counters, setCounters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3001/api/v1/counter")
    .then((response) => {
      setCounters(response.data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  return (
   <>
      {loading && (<p>counters are loading...</p>)}
      {error && (<p>{error}</p>)}
      {counters && (
      <ul>
        {counters.map(({ title, id }) => (<li key={id}>{title}</li>))}
      </ul>
    )}
   </>
  );
}
export default App;
