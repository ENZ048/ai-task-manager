import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'



function App() {


  return (
    <>
      <NavBar/>
      <SideBar/>
      <Outlet/>

    </>
  )

   
}

export default App
