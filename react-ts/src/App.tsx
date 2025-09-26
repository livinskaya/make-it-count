import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [counters, setCount] = useState([0, 0, 0]);

  // effect combi interval

  function countAll() {
    setCount(counters.map((count) => count + 1))
  }

  function countOne(index: number) {
    setCount(counters.map((count, i) => (i === index ? count + 1 : count)))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(counters.map((count) => count + 1))
    }, 2000);

    return () => clearInterval(interval)
  })


  return (
    <>

      <div className="flex flex-col justify-center items-center h-screen bg-gray-700">
        <div className="">
          <h1 className="mb-11 text-6xl text-white">Make it Count!</h1>
          <div className="flex flex-col gap-20 items-center">
            <button onClick={countAll} className='bg-gray-500 text-white rounded-lg p-1'>app count is {counters[0]}</button>
            <div className="flex flex-row gap-15">
              <button onClick={() => countOne(1)} className='bg-gray-500 text-white rounded-lg p-1'>
                count is {counters[1]} </button>
              <button onClick={() => countOne(2)} className='bg-gray-500 text-white rounded-lg p-1'>
                count is {counters[2]}</button>

            </div>
          </div>
        </div>
      </div >
    </>
  )


}



export default App
