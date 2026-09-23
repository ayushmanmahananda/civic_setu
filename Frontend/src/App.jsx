import './index.css'
import Map from './components/Map'
import {Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
      <div className='flex justify-between m-10 gap-10'>
        <Map /> 
      </div>      
    </>
  )
}

export default App