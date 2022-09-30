import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./components/navbar/navbar.component";
import Authentication from "./routes/authentication/auth.component";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Home />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
