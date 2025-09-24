import './App.css'

function Button() {
  return (
    <button className='bg-red-500 rounded-md  hover:bg-amber-200 focus:outline-2 focus:outline-offset-1 focus: outline-amber-500'></button>
  )
}

function Thumbnail() {
  return (
    <div className='pt-15 pl-25 rounded-md bg-blue-400 relative top-5 left-3'>

    </div>
  )
}


function App() {

  return (
    <>
      <div className="flex items-center h-screen justify-center gap-3 bg-blue-200 flex-col">
        <h1 className="mb-5 font-semibold text-4xl absolute top-80">Styling</h1>
        <div className="bg-white rounded-2xl w-120 h-25">
          <div className="flex flex-row">
            <Thumbnail />
            <h2></h2>
            <Button />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
