// import { useState } from 'react'

import { Suspense } from "react"
import CountryContainer from "./componensts/CountryContainer"


const allApi = fetch("https://openapi.programming-hero.com/api/all")
.then(res=> res.json())
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Suspense fallback={<h3>Loading.....</h3>}>
      <CountryContainer allApi={allApi}></CountryContainer>
    </Suspense>
      
    </>
  )
}

export default App
