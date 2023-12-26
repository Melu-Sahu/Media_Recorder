import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <h1>Hello</h1>
      <Outlet />
    </>
  )
}

export default App
