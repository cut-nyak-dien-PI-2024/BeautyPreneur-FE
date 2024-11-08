import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LupaPassword2.css';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { resetPassword } from '../components/services/authService';

const LupaPassword2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Validasi password: minimal 6 karakter, mengandung huruf dan angka
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordPattern.test(password)) {
      setErrorPassword('*Password harus minimal 6 karakter dan terdiri dari huruf serta angka.');
      return;
    }
    setErrorPassword(''); // Reset error message after password validation

    // Validasi konfirmasi password
    if (password !== confirmPassword) {
      setErrorConfirmPassword('*Password Baru dan Konfirmasi Password tidak cocok.');
      return;
    }
    setErrorConfirmPassword(''); // Reset error message after confirmation validation

      const isSuccess = await resetPassword(password);
      if(isSuccess?.message){
        // Proses penggantian password
        alert("Sandi Anda telah terganti! Silakan masuk kembali.");
        navigate("/login");
      }
  };

  return (
    <div className="forgot-password">
      <form className="password-form" onSubmit={handleSubmit}>
        <h3>Buat Password Baru</h3>
        <p>Password Anda sebelumnya akan terganti</p>

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
          {errorPassword && (
            <p style={{ color: 'red', fontSize: '12px', fontWeight: 'bold' }}>
              {errorPassword}
            </p>
          )}
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
          {errorConfirmPassword && (
            <p style={{ color: 'red', fontSize: '12px', fontWeight: 'bold' }}>
              {errorConfirmPassword}
            </p>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Ganti Password
        </button>
      </form>
    </div>
  );
};

export default LupaPassword2;
