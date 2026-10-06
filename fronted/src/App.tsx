
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dashdord from './components/Dashdord'
import Header from './components/Header'
import NewAlert from './components/NewAlert'
import UpdateAlert from './components/UpdateAlert'
import DeleteAlert from './components/DeleteAlert'
import Login from './components/Login'
import Protected from './components/Protected'
import RegisterPage from './components/RegisterPage'
import { AdminPage } from './components/AdminPage'
import UpdateStatus from './components/UpdateStatus'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/' element={<Protected/>}>
      <Route path='/' element={<Header/>}>

      <Route path='/Dashdord' element={<Dashdord/>}/>
      <Route path='/NewAlert' element={<NewAlert/>}/>
      <Route path='/UpdateAlert' element={<UpdateAlert/>}/>
      <Route path='/DeleteAlert' element={<DeleteAlert/>}/>

      <Route path='/RegisterPage' element={<RegisterPage/>}/>
      <Route path='/AdminPage' element={<AdminPage/>}/>
      <Route path='/UpdateStatus' element={<UpdateStatus/>}/>
      </Route>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
