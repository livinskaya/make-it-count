import { useState, useEffect } from 'react'
import './App.css'
import { ButtonWithState } from './components/button-with-state';
import { Button, buttonStyleClasses } from './components/button';

const App = () => {
  const [appCount, setAppCount] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setAppCount(appCount + 1);
    }, 2000);

    return () => clearInterval(interval)
  })

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-linear-to-b from-purple-400 to-purple-600">
      <div className="font-minecraft bg-gray-100/20 p-8 rounded-lg shadow-md">
        <h1 className="mb-11 text-6xl shadow-md text-white">Make it Count!</h1>
        <div className="flex flex-col gap-20 items-center text-2xl">
          <Button onClick={() => setAppCount(appCount + 1)} className="w-full">{appCount}</Button>
          <div className="flex flex-row gap-15">
            <ButtonWithState appCount={appCount} />
            <ButtonWithState appCount={appCount} />
          </div>
        </div>
        <button className={buttonStyleClasses}>hallo</button>
      </div>
    </div >
  )


}




export default App
