import { BrowserRouter, Route, Routes } from "react-router-dom"
import './styles/base.style.scss';
import HomePage from "./pages/HomePage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
