import { useState, useEffect } from 'react'
import './App.css'

function Button(obj: { name: string, onPress: () => void }) {

  return (
    <button onClick={obj.onPress} className='bg-pink-300/50 hover:shadow-neutral-50 shadow-md text-white rounded-lg p-1'>{obj.name}</button>
  )

}


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

  // button extra komponente

  return (
    <>

      <div className="flex flex-col justify-center items-center h-screen bg-linear-to-b from-purple-400 to-purple-600">
        <div className="font-minecraft bg-gray-100/20 p-8 rounded-lg shadow-md">
          <h1 className="mb-11 text-6xl shadow-md text-white">Make it Count!</h1>
          <div className="flex flex-col gap-20 items-center">
            <Button name={`app count is: ${counters[0]}`} onPress={countAll}></Button>
            <div className="flex flex-row gap-15">
              <Button name={`count is: ${counters[1]}`} onPress={() => countOne(1)}></Button>
              <Button name={`count is: ${counters[2]}`} onPress={() => countOne(2)}></Button>
            </div>
          </div>
        </div>
      </div >
    </>
  )


}




export default App
