import React from 'react'
import Signup from '../component/Signup'
import Login from '../component/Login'
import { useNavigate } from 'react-router-dom'

type UserForm = {
  fullName: string;
  email: string;
  password: string;
}

type LoginForm = {
  email: string;
  password: string;
}

const Authpage = () => {
  const [currentPage, setCurrentPage] = React.useState("signup");
  const navigate = useNavigate()

  const handleSignup = (formdata: UserForm) => {
    const stored = localStorage.getItem("user");
    const users: UserForm[] = stored ? JSON.parse(stored) : [];

    const existingUser = users.find((u) => u.email === formdata.email);
    if (existingUser) {
      alert("User already exists");
      setCurrentPage("login");
      return;
    }

    users.push(formdata);
    localStorage.setItem("user", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(formdata));
    setCurrentPage("login");
  };

  const handleLogin = (data: LoginForm) => {
    const stored = localStorage.getItem("user");
    const users: UserForm[] = stored ? JSON.parse(stored) : [];
    const user = users.find((u) => u.email === data.email && u.password === data.password);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert(`Welcome back, ${user.fullName}!`);
      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div>
      {currentPage === "signup"
        ? <Signup onSignup={handleSignup} onSwitch={() => setCurrentPage("login")} />
        : <Login onLogin={handleLogin} onSwitch={() => setCurrentPage("signup")} />
      }
    </div>
  );
};

export default Authpage;
