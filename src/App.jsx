import './App.css'
import {BrowserRouter , Routes, Route} from  "react-router-dom";
import  Home  from './components/Home'
import Training from "./components/Training";
import Description from "./components/Description.jsx";
import './index.css';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/training" element={ <Training />} />
        <Route path="/description" element ={ <Description/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
