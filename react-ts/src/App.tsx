import './App.css'
import { HeartIcon } from './HeartIcon'
import { useState } from 'react'



function Thumbnail() {
  return (
    <div className='h-15 w-25 rounded-md bg-blue-400'>

    </div>
  )
}




function App() {

  const [fillheart, setFillheart] = useState(false);

  function switchHeart() {
    setFillheart(!fillheart);
  }

  return (
    <>
      <div className="flex items-center h-screen justify-center bg-blue-200 flex-col">
        <h1 className="mb-5 font-semibold text-4xl">Styling</h1>
        <div className="bg-white p-5 rounded-2xl w-120 flex flex-row items-center">

          <Thumbnail />
          <div className="pl-2 flex-1">
            <h2 className="text-2xl">Video Title</h2>
            <p>Video Description</p>
          </div>
          <div onClick={switchHeart} className={fillheart ? 'text-red-400' : 'text-transparent'}>
            <HeartIcon />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
