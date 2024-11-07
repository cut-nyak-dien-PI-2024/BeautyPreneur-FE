import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './verifyRegiter.css';

const VerifyRegister = () => {
  const [code, setCode] = useState(['', '', '', '','']);
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
  
    // Auto-focus to the next input if a digit is entered
    if (e.target.nextSibling && e.target.value) {
      e.target.nextSibling.focus();
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    // Lakukan verifikasi dengan kode yang dimasukkan
    alert(`Kode verifikasi: ${verificationCode}`);
    
    // Setelah verifikasi berhasil, arahkan ke halaman login
    navigate("/login"); 
  };

  return (
    <div className="verification-container">
      <form onSubmit={handleSubmit} className="verification-form">
        <h3>Verifikasi Kode</h3>
        <p>Masukkan kode yang kami kirimkan melalui email</p>
        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="code-input"
              required
            />
          ))}
        </div>
        <button type="submit" className="submit-btn">Verifikasi</button>
      </form>
    </div>
  );
};

export default VerifyRegister;
