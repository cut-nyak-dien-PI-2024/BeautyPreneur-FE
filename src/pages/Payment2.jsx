import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Payment2.css';

const Payment2 = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [training, setTraining] = useState(null);

    useEffect(() => {
        axios
            .get(`https://api.mockfly.dev/mocks/8b71d6f2-9d3a-43ed-85d5-483f9c7e2c1d/pelatihan`)
            .then((response) => {
                const trainingData = response.data.data.find((item) => item.id === id);
                setTraining(trainingData);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);

    if (!training) {
        return <div>Loading...</div>;
    }

    const ClickThree = (e) => {
        e.preventDefault();
        navigate(`/payment3/${id}`);
    };
    
    const ClickTwo = (e) => {
        e.preventDefault();
        navigate(`/payment/${id}`);
    };

    return (
        <div className="invoice-container">
            <div className="headerInvoice">
                <p className="header-text">Setelah melakukan pembayaran, Admin kami akan SEGERA menghubungi (2 X 24 JAM KERJA)</p>
            </div>

            <div className="invoice-details">
                <h2 className="invoice-title">Invoice BeautyPreneur</h2> 
                <div className="product-info">
                    <img src={training.headline_img} alt={training.title} className="product-image"/>
                    <div>
                        <p className="product-name">{training.title}</p>
                        <p className="product-price">Rp. {training.price}</p>
                        <p className="product-qty">1x</p>
                    </div>
                </div>
                <div className="pricing">
                    <p className="subtotal">Subtotal <span>Rp. {training.price}</span></p>
                    <p className="discount">Diskon <span>-</span></p>
                    <p className="total-price">Total <span> Rp. {training.price}</span></p>
                </div>
                <div className="buttons">
                    <button className="register-button back-button" onClick={ClickTwo}>Kembali</button>
                    <button className="register-button confirm-button" onClick={ClickThree}>Konfirmasi Pesanan</button>
                </div>
            </div>

            <div className="payment-info">
                <h3 className="payment-title">Selangkah Lagi!</h3>
                <p className="payment-instruction">1. TRANSFER VIA beberapa opsi pembayaran di bawah ini :</p>
                <ul className="payment-options">
                    <li><strong>BRI</strong> no rek 3170-01-001379-50-5 a/n UCI CHATRINADA SH</li>
                    <li><strong>MANDIRI</strong> no rek 0000000000 a/n Windi Al Azmi</li>
                    <li><strong>BTPN</strong> no rek 90011192933 a/n Erwiana Anggriani</li>
                    <li><strong>BNI</strong> no rek 1387505038 a/n Sabrina Natasya Bilbina</li>
                </ul>
                <p className="payment-confirmation">2. Setelah melakukan transfer, tekan tombol KONFIRMASI PEMBAYARAN disertai dengan upload bukti pembayaran atau kirim bukti transfer ke WA.</p>
                <p className="wa-contact"><strong>WA: 082-5939-6969</strong> (WA Only, tidak dapat di telepon)</p>
            </div>
        </div>
    );
};

export default Payment2;
