import { useState } from "react";
import { useEffect } from "react";
import Search from "../search/Search";
import Cat from "../cat/Cat";

const App = ()=>{
  const [cats, setCats]=useState([]); //Initial state
  const [search, setSearch] =useState(false)

  const handleSearch = (data)=>{
    setSearch(data);
  }

  useEffect(()=>{
    if(search){
    try{
      fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${search}`)
      .then(response=>response.json()
      .then(data=>setCats(data))
      )
    }catch(msg){
      console.log(msg)
    }
  
  }
  },[search])
  console.log(cats)
  return(
    <>
    <Search onSearch={handleSearch}/>
      {cats?.map((cat)=>
        <Cat key={cat.id} url={cat.url}/>
      )}
    </>
  )
}

export default App