import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Coffee from './Pages/Coffee'
import Merch from './Pages/Merch'
import Subscribe from './Pages/Subscribe'
import FindInStore from './Pages/FindInStore'
import Account from './Pages/Account'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import './App.css'
import AuthPage from './Pages/Authpage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coffee' element={<Coffee />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/merch' element={<Merch />} />
        <Route path='/find-in-store' element={<FindInStore />} />
        <Route path='/account' element={<Account />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
