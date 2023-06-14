import { RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import router from '../Navigation/router'

function App() {

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
