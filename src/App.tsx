import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Search from "./pages/Search";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ProfileCard from "./components/ProfileCard";
import NoPage from "./pages/NoPage";
// import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<ProfileCard />} />
          </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
