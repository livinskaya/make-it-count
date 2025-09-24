import { useState } from 'react'
import './App.css'


function App() {

  const [count, setCount] = useState(0);

  function Click() {
    setCount(count + 1);
  }

  return (
    <>

      <div className="flex flex-col justify-center items-center h-screen bg-gray-700">
        <h1 className="mb-11 text-6xl text-white">Make it Count!</h1>
        <div className="flex flex-col gap-20 items-center">
          <Button name={"app count is "} count={count} onClick={Click} />
          <div className="flex flex-row gap-15">
            <Button name={"count is "} count={count} onClick={Click} />
            <Button name={"count is "} count={count} onClick={Click} />

          </div>
        </div>

      </div>
    </>
  )

  function Button({ name, count, onClick }) {
    return <button className='bg-gray-500 text-white rounded-lg p-1' onClick={onClick}>
      {name}{count}
    </button>
  }
}



export default App
