import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LupaPassword.css';
import { FaEnvelope } from 'react-icons/fa';
import { forgotPassword } from '../components/services/authService';

const LupaPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Masukkan email yang valid.');
    } else {
       await forgotPassword(email);
        navigate("/verif-kode"); // Mengarahkan ke halaman Verifkode
    }
  };

  return (
    <div className="forgot-password">
      <form className="password-form" onSubmit={handleSubmit}>
        <h3>Atur Ulang Password</h3>
        <p>Silakan masukkan alamat email Anda untuk menerima kode verifikasi.</p>

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

        <button type="submit" className="submit-btn">
          Kirim Kode
        </button>
      </form>
    </div>
  );
};

export default LupaPassword;
