import {HomePage} from '../pages/home/Home'
import {LoginPage} from '../pages/login/Login'
import {RegisterPage} from '../pages/register/Register'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export function NavigationRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    );
  }



