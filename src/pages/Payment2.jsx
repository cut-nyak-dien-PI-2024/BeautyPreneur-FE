import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Payment2.css';
import { getCourseBySlug, createOrder } from "../components/services/coursesServices";
import bankConfig from "./../datas/BankAccount";


const Payment2 = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [training, setTraining] = useState(null);
    const [order, setOrder] = useState({});

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

    const ClickThree = (e) => {
        e.preventDefault();
        
        // create order
        // if success then redirect user to payment confirmation page
        createOrder(id)
        .then(resp => {
            const orderResp = resp.data;
            setOrder(orderResp);
            console.log(orderResp);
            navigate(`/payment3/${id}/${orderResp?.data?._id}`);
        })
        .catch(err => {
            alert(err.response?.data?.message);
            navigate(`/kursus/${id}`);
        })
    };
    
    const ClickTwo = (e) => {
        e.preventDefault();
        navigate(`/payment/${id}`);
    };

    const bankAccounts = Object.values(bankConfig.BANK_ACCOUNTS).map(bankAccount => {
        return <li>{bankAccount}</li>
    });

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
                <ul className="payment-options">{bankAccounts}</ul>
                <p className="payment-confirmation">2. Setelah melakukan transfer, tekan tombol KONFIRMASI PEMBAYARAN disertai dengan upload bukti pembayaran atau kirim bukti transfer ke WA.</p>
                <p className="wa-contact"><strong>WA: {bankConfig.PAYMENT_CONFIRMATION_PHONE}</strong> (WA Only, tidak dapat di telepon)</p>
            </div>
        </div>
    );
};

export default Payment2;
