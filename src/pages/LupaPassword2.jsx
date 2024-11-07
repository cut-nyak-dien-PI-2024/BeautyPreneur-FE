import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LupaPassword2.css';
import { FaEye, FaEyeSlash, FaLock, FaEnvelope } from 'react-icons/fa';

const LupaPassword2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Masukkan email yang valid.');
    } else if (password === confirmPassword) {
        alert('Silahkan cek Email Anda untuk kode verifikasi');
        navigate('/verif-kode'); // Mengarahkan ke halaman Verifkode
      } else {
        alert('Password tidak cocok, coba lagi.');
      }
  };

  return (
    <div className="forgot-password">
      <form className="password-form" onSubmit={handleSubmit}>
        <h3>Buat Password Baru</h3>
        <p>Password Anda sebelumnya akan terganti</p>

        <div className="input-wrapper">
          <label>Email</label>
          <div className="email-input">
            <FaEnvelope className="icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
        </div>

        <div className="input-wrapper">
          <label>Password Baru</label>
          <div className="password-input">
            <FaLock className="icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="input-wrapper">
          <label>Konfirmasi Password</label>
          <div className="password-input">
            <FaLock className="icon" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Konfirmasi Password"
              required
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="eye-icon">
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Ganti Password
        </button>
      </form>
    </div>
  );
};

export default LupaPassword2;
