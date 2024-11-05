import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './Payment3.css';
import { getCourseBySlug, paymentConfirmation } from "../components/services/coursesServices";
import bankConfig from "./../datas/BankAccount";

const Payment3 = () => {
    const { id, orderId } = useParams(); // Mengambil ID dari URL
    const [training, setTraining] = useState(null); // State untuk menyimpan data training
    const [isLoading, setIsLoading] = useState(true); // State untuk loading
    const navigate = useNavigate();

    // input refs
    const paymentTimeRef = useRef(null);
    const bankFromRef = useRef('');
    const bankFromAccountNameRef = useRef('');
    const bankToRef = useRef('');
    const amountRef = useRef('');

    // Fetch data training berdasarkan ID
    useEffect(() => {
        getCourseBySlug(id)
            .then(response => {
                const trainingData = response;
                setTraining(trainingData.data);
                setIsLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);
    

    function handlePaymentConfirmationClick() {
        const payload = {
            confirmedAmount: training.price,
            bankFrom: bankFromRef.current.value,
            bankTo: bankToRef.current.value,
            notes: `Account Name: ${bankFromAccountNameRef.current.value} - ${amountRef.current.value}`
        }

        paymentConfirmation(id, orderId, payload)
            .then(resp => {
                const respData = resp.data;
                alert(respData.message);
                navigate("/success-payment");
            })
            .catch(err => {
                alert(err.response?.data?.message);
                navigate(`/kursus/${id}`);
            });
    };

    // Fungsi untuk menangani klik tombol WhatsApp
    const handleWhatsappClick = () => {
        const phoneNumber = bankConfig.PAYMENT_CONFIRMATION_PHONE;
        const message = `Halo saya ingin konfirmasi pesanan saya! dengan nomor order ${orderId}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };
    

    if (isLoading) return <div>Loading...</div>; // Tampilkan loading jika data belum tersedia

    if (!training) return <div>Training tidak ditemukan</div>; // Tampilkan pesan jika pelatihan tidak ditemukan

    const bankAccounts = Object.values(bankConfig.BANK_ACCOUNTS).map(bankAccount => {
        return <option value={bankAccount} key={bankAccount}>{bankAccount}</option>;
    });

    return (
        <div className="confirmation-container">
            <div className="headerConfirmation">
                <p>Konfirmasi Pembayaran</p>
                <button className="whatsapp-button" onClick={handleWhatsappClick}>
                    Konfirmasi Pembayaran Via Whatsapp
                </button>
            </div>

            <div className="form-container">
                <form id="payment-form">
                    <div className="form-group">
                        <label htmlFor="invoice-number">Invoice</label>
                        <input type="text" id="invoice-number" value={orderId} readOnly />
                    </div>

                    <div className="form-group">
                        <label htmlFor="payment-date">Waktu Pembayaran</label>
                        <input type="date" id="payment-date" required ref={paymentTimeRef} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="transfer-to">Ditransfer Ke</label>
                        <select id="transfer-to" required ref={bankToRef}>
                            {bankAccounts}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="bank-name">Bank Asal</label>
                        <input type="text" id="bank-name" placeholder="Contoh: Mandiri" required ref={bankFromRef} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="account-name">Nama Pemilik Rekening</label>
                        <input type="text" id="account-name" placeholder="Nama Pemilik Rekening" required ref={bankFromAccountNameRef}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="amount">Jumlah</label>
                        <p className="total">Total <span> Rp.{training?.price || 'Harga tidak tersedia'}</span></p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="upload-receipt">Bukti Transfer (Opsional)</label>
                        <input type="file" id="upload-receipt" />
                    </div>
                    
                    {/* Button Checkout payment */}
                    <button type="button" className="submit-btn" onClick={handlePaymentConfirmationClick}>Konfirmasi</button>
                </form>
            </div>
        </div>
    );
};

export default Payment3;
