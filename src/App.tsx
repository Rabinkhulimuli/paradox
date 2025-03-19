import { BrowserRouter, Route, Routes } from "react-router-dom"
import Headre from "./components/Headre"
import HomePage from "./components/HomePage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Headre/>} >
            <Route index element={<HomePage/>}  />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
