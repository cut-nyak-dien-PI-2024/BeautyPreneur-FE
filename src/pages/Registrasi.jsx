import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Registrasi.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { register } from "../components/services/authService";

const Registrasi = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorPassword, setErrorPassword] = useState(""); // State untuk pesan error password
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validasi password: minimal 6 karakter, mengandung huruf dan angka
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordPattern.test(password)) {
      setErrorPassword("*Password harus minimal 6 karakter dan terdiri dari huruf serta angka.");
      return;
    }
    setErrorPassword(""); // Reset error jika validasi berhasil

    const dataPayload = {
      name: nama,
      email,
      password,
      noTelephone: whatsapp,
    };

    try {
      await register(dataPayload);
      alert("Akun berhasil dibuat!");
      navigate("/verif-regis");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div id="register-auth">
      <div className="auth__container">
        <h5 className="auth__header">Buat Akun</h5>
        <form className="auth__form" onSubmit={handleSubmit} id="register">
          <div className="mb-3">
            <label htmlFor="nama" className="form-label">
              Nama *
            </label>
            <input
              className="form-control auth__input"
              id="nama"
              type="text"
              name="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              className="form-control auth__input"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="whatsapp" className="form-label">
              Nomor WhatsApp *
            </label>
            <input
              className="form-control auth__input"
              id="whatsapp"
              type="tel"
              name="whatsapp"
              pattern="[0-9]{10,13}"
              maxLength="13"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password *
            </label>
            <div className="input-group">
              <input
                className="form-control auth__input"
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {/* Menampilkan pesan error jika ada */}
            {errorPassword && (
  <p style={{ color: 'red', fontSize: '12px', fontWeight: 'bold' }}>
    {errorPassword}
  </p>
)}


          </div>

          <input
            type="submit"
            name="submit"
            value="Daftar"
            className="btn btn-primary mb-3 auth__login-button"
          />
          <p className="fs-6">
            Sudah memiliki akun?{" "}
            <Link to="/login" className="auth__cta auth__cta--small">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registrasi;
