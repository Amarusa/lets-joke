import {useState, useEffect} from 'react'

export default function useJokes(firstName, lastName) {
    const [joke, setJoke] =useState('')
    useEffect(() => {
        const fectchJoke = async () => 
        await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
            
        )
        .then((res) => res.json())
        .then((data) =>{
            console.log(data.value.joke)
            setJoke(data.value.joke)
        })
        fectchJoke();
    }, [firstName, lastName])
  return joke
   
  
}
