import { useState } from 'react'
import './App.css'
import { ExcuseDisplay } from './Excuse';
import axios from 'axios';
import { CreateExcuse } from './CreateExcuse';

export interface ExcuseInfo {
  id: number
  excuse: string
  category: string
}

function App() {
  const [excuseText, setExcuseText] = useState<ExcuseInfo>({} as ExcuseInfo);

  function getExcuse(category: string) {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${category.toLowerCase()}`)
      .then(res => {
        console.log(res.data[0])
        setExcuseText(res.data[0])
      })
  }
  console.log(excuseText)
  return (
    <>
      <h1>Generate an Excuse</h1>
      <CreateExcuse category='Family' getExcuse={getExcuse} />
      <CreateExcuse category='Office' getExcuse={getExcuse} />
      <CreateExcuse category='Gaming' getExcuse={getExcuse} />
      <CreateExcuse category='Developers' getExcuse={getExcuse} />
      <CreateExcuse category='Unbelievable' getExcuse={getExcuse} />
      {excuseText.excuse && <ExcuseDisplay excuse={excuseText.excuse} category={excuseText.category} id={excuseText.id} />}
    </>
  )
}

export default App
