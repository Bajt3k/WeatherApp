import { useState } from 'react'
import Search from './components/Search'


function App() {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  function handleSearch() {
    console.log(city)
  }
  return (
    <>
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl font-bold text-white">Weather App</h1>
        <Search 
          city={city}
          setCity={setCity}
          handleSearch={handleSearch}
        />
      </div>
    </>
  )
}

export default App
