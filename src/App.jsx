import {Header,Footer} from './components'

import { Outlet } from 'react-router-dom'


function App() {


  
  return (
    <div className="w-full h-vh bg-slate-600 text-white">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      
    </div>
    
  )
}

export default App
