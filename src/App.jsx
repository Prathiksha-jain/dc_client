import './App.css'
import {BrowserRouter , Routes, Route} from  "react-router-dom";
import  Home  from './components/Home'
import Training from "./components/Training";
import './index.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/training" element={ <Training />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
