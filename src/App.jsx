import Header from './components/Header';
import Home from './pages/Home';
import Issue from "./pages/Issue";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/issue' element={<Issue/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  )
}

export default App
