import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MovieList from "./pages/MovieList";
import Header from "./components/Header";
import { useAuthContext } from "./contexts/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails";
import UserHome from "./pages/UserHome";
import UsersList from "./pages/UsersList";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute isAllowed={user} />}>
          <Route path="/movies" element={<MovieList />} />
          <Route path="/user" element={<User />}>
            <Route index element={<UserHome />} />
            <Route path="details" element={<UserDetails />} />
          </Route>
          <Route
            element={
              <ProtectedRoute
                isAllowed={user.roles.includes("admin")}
                redirectPath="/user"
              />
            }
          >
            <Route path="users-list" element={<UsersList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
