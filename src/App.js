import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./modules/user/landing/Landing";
import Login from "./modules/common/auth/pages/Login";
import Auth from "./modules/common/auth/pages/Auth";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />}>
        <Route path="" element={<Navigate replace={true} to="login" />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
