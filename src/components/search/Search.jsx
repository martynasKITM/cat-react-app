import Breed from "../breed/Breed";
import { useState } from "react";
import { useEffect } from "react";
const Search = (props)=>{
    const [breeds, setBreeds] = useState([])

    const handleInput = (e)=>{
        props.onSearch(e.target.value)
    }
    useEffect(()=>{
        try{
          fetch(`https://api.thecatapi.com/v1/breeds`)
          .then(response=>response.json()
          .then(data=>setBreeds(data))
          )
        }catch(msg){
          console.log(msg)
        }
      },[])

      
    return( 
        <>
        <label for="ice-cream-choice">Choose breed:</label>
        <input list="breeds"  name="ice-cream-choice"  onChange={handleInput}/>
        <datalist id="breeds">
            {breeds.map((breed)=>
                <Breed id={breed.id} name={breed.name}/>
            )}
          
        </datalist>
        </>
    )
}

export default Search