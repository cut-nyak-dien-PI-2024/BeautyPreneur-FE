import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Registrasi.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Registrasi = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify({ nama, email, whatsapp, password }));
    alert('Akun berhasil dibuat!');
    navigate('/login');
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
            <label htmlFor="nama" className="form-label">Nama *</label>
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
            <label htmlFor="email" className="form-label">Email *</label>
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
            <label htmlFor="whatsapp" className="form-label">Nomor WhatsApp *</label>
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
  <label htmlFor="password" className="form-label">Password *</label>
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
</div>

          <input
            type="submit"
            name="submit"
            value="Daftar"
            className="btn btn-primary mb-3 auth__login-button"
          />
          <p className="fs-6">
            Sudah memiliki akun?{' '}
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
