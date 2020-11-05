import React, { useState } from "react";

const isNotEmpty = (value) => (value.length > 0)

const Form = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const handleSubmit =(e) => {
    e.preventDefault();
    if(isNotEmpty(search)){
      onSearch(search);
    }
    
  }
  console.log(search);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Buscador</label>
        <input
        id="search" 
        type="text" 
        name="search" 
        value={search} 
        onChange={({ target }) => setSearch(target.value)}
      />
        <button type="submit">search</button>
      </form>
    </>
  )


}

export default Form;