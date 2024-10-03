
import { useEffect, useState } from "react";

const App = () => {

  const [quote, setQuote] = useState("")

  const url = "https://api.kanye.rest"

  const getQuote = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const finalQuote = data["quote"]
    setQuote(finalQuote)
  }


  useEffect(() => {
    getQuote()
  }, [])




  return (
    <div className="kanye">
      <h1>Kanye West said: </h1>
      <h2>{quote}</h2>
      <button className="btn" onClick={getQuote}>Another one</button>
    </div>
  )
}

export default App