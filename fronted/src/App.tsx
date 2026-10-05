
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashdord from './components/Dashdord'
import Header from './components/Header'
import NewAlert from './components/NewAlert'
import UpdateAlert from './components/UpdateAlert'
import DeleteAlert from './components/DeleteAlert'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Header/>}>

    <Route path='/Dashdord' element={<Dashdord/>}/>
    <Route path='/NewAlert' element={<NewAlert/>}/>
    <Route path='/UpdateAlert' element={<UpdateAlert/>}/>
    <Route path='/DeleteAlert' element={<DeleteAlert/>} />
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
