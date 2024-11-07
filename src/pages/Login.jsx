import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { FaEye, FaEyeSlash, FaLock, FaEnvelope } from "react-icons/fa";
import { getCurrentUser, login } from "../components/services/authService";

const Login = ({ onLogin }) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: emailInput,
      password: passwordInput,
    };

    try {
      const isToken = await login(data);
      alert(isToken.message);
      const getDataUser = await getCurrentUser(isToken.access_token); 
      if (getDataUser) {
        localStorage.setItem(
          "user",
          JSON.stringify({ nama: getDataUser.user.name, email:getDataUser.user.email, whatsapp: getDataUser.user.noTelephone})
        );
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", isToken.access_token);
        navigate("/");
      }
    } catch (err) {
      alert(err.response.data.message);
    }

    // const user = JSON.parse(localStorage.getItem('user'));
    // if (user && user.email === emailInput && user.password === passwordInput) {
    //   alert(`Selamat datang, ${user.nama}!`);
    //   localStorage.setItem('isLoggedIn', 'true');
    //   if (onLogin) onLogin({ email: emailInput });
    //   navigate('/');
    // } else {
    //   alert('Email atau password salah atau belum terdaftar!');
    // }
  };

  return (
    <div id="login-auth">
      <div className="auth__container">
        <h5 className="auth__header">
          <strong>Login</strong>
        </h5>
        <form className="auth__form" onSubmit={handleSubmit} id="sign-in">
          <div className="input-wrapper">
            <label>Email</label>
            <div className="input-field">
              <FaEnvelope className="icon" />
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label>Password</label>
            <div className="input-field">
              <FaLock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="eye-icon"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <Link to="/lupa-password">
            <button type="button" className="auth__cta auth__cta--small">
              Lupa Password?
            </button>
          </Link>

          <input
            type="submit"
            name="submit"
            value="Login"
            className="btn btn-primary mb-3 auth__login-button"
          />
          <p className="fs-6">
            Belum punya akun?{" "}
            <Link to="/registrasi" className="auth__cta auth__cta--small">
              daftar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
