import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  )
}

export default App
