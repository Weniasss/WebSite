import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserProfile from "./pages/UserProfile";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/employeeList" element={<HomePage />} />

          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
