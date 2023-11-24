import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Login, Home,Register, Profile, ResetPassword } from "./pages"

function Layout(){
  const { user } = useSelector((state) => state.user);
  const location=useLocation();
  console.log(user);

  return user?.token ? (
    <Outlet />
  ):(
    <Navigate to="/login" state={{ from:location }} replace />
  )
}

function App() {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/profile/:id" element={<Profile />} ></Route>
        </Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/reset-password" element={<ResetPassword />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
