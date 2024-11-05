import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Payment1.css';
import { getCourseBySlug } from "../components/services/coursesServices";

const Payment1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [training, setTraining] = useState(null);

  useEffect(() => {
    getCourseBySlug(id)
      .then(response => {
        const trainingData = response;
        setTraining(trainingData.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!training) {
    return <div>Loading...</div>;
  }

  const ClickTwo = (e) => {
    e.preventDefault();
    navigate(`/payment2/${id}`);
  };

  return (
    <div className="containerPayment">
      <div className="headerFirstPayment">
        <p className="payment-info-text">
          Setelah melakukan pembayaran, Admin kami akan SEGERA menghubungi (2 X 24 JAM KERJA)
        </p>
      </div>

      <h1 className="main-title">Review Payment</h1>

      <div className="payment-section">
        <div className="customer-info">
          <h2 className="title">Informasi Pembeli</h2>
          <form id="payment-form" onSubmit={ClickTwo}>
            <label htmlFor="name">Nama</label>
            <input placeholder="Uci Chatrinada" type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input placeholder="ucicha@gmail.com" type="email" id="email" name="email" required />

            <label htmlFor="whatsapp">Nomor Whatsapp</label>
            <input placeholder="085259396969" type="tel" id="whatsapp" name="whatsapp" required />

            <button className="register-button">Daftar</button>
          </form>
        </div>

        <div className="order-summary">
          <h2 className="title">Order Summary</h2>
          <div className="order-item">
            <img src={training.headline_img} alt={training.title} />
            <div className="order-sub">
              <p className="product-name">{training.title}</p>
              <div className="item-quantity">
                <p className="quantity-text">Rp. {training.price}</p>
                <p className="quantity-text">1x</p>
                <p id="subtotal">Rp. {training.price}</p>
              </div>
            </div>
            <i className="fas fa-trash-alt delete-icon"></i>
          </div>

          <label htmlFor="coupon">Kode Kupon</label>
          <input type="text" id="coupon" name="coupon" />
          <p className="total">Total: Rp. {training.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Payment1;
