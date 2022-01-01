import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import AdminRoute from "./Pages/Authentication/AdminRoute/AdminRoute";
import Login from "./Pages/Authentication/Login";
import PrivateRoute from "./Pages/Authentication/PrivateRoute/PrivateRoute";
import Registration from "./Pages/Authentication/Registration";
import Home from "./Pages/Home/Home";
import ManageUsers from "./Pages/ManageUsers/ManageUsers";
import NotFound from "./Pages/NotFound/NotFound";
import Payment from "./Pages/Payment/Payment";
import ProflePage from "./Pages/ProfilePage/ProflePage";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<PrivateRoute><ProflePage /></PrivateRoute>} />
          <Route path="/payment/:price" element={<Payment />} />
          <Route path="/manageUser" element={<AdminRoute><ManageUsers /></AdminRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
