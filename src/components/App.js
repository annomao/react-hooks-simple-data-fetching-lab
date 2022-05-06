import React,{ useState, useEffect } from "react"

function App(){
  const [getDog, setGetDog] = useState(null)

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data =>{
      setGetDog(data)
    })
  },[])

  if(!getDog) return <p>Loading....</p>
  return <img src={getDog.message} alt="A Random Dog"/>
}

export default App
