import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Verifkode.css';

const Verifkode = () => {
  const [code, setCode] = useState(['', '', '', '', '']);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    // Auto-focus ke input berikutnya
    if (e.target.nextSibling && e.target.value) {
      e.target.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    alert(`Kode verifikasi: ${verificationCode}`);
    
    // Navigasi ke halaman /lupa-password2
    navigate('/lupa-password2');
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

export default Verifkode;
