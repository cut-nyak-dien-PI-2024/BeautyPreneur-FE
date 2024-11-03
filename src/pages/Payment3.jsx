import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Payment3.css';

const Payment3 = () => {
    const { id } = useParams(); // Mengambil ID dari URL
    const [training, setTraining] = useState(null); // State untuk menyimpan data training
    const [isLoading, setIsLoading] = useState(true); // State untuk loading

    // Fetch data training berdasarkan ID
    useEffect(() => {
        const fetchTraining = async () => {
            try {
                const response = await axios.get(`https://api.mockfly.dev/mocks/8b71d6f2-9d3a-43ed-85d5-483f9c7e2c1d/pelatihan`);
                const trainingData = response.data.data.find((item) => item.id === id);
                setTraining(trainingData);
            } catch (error) {
                console.error('Error fetching training data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTraining();
    }, [id]);

    // Fungsi untuk menangani klik tombol WhatsApp
    const handleWhatsappClick = () => {
        const phoneNumber = '6285259396969';
        const message = 'Halo saya ingin konfirmasi pesanan saya!';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    if (isLoading) return <div>Loading...</div>; // Tampilkan loading jika data belum tersedia

    if (!training) return <div>Training tidak ditemukan</div>; // Tampilkan pesan jika pelatihan tidak ditemukan

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
                        <input type="text" id="invoice-number" value="Beauty Preneur" readOnly />
                    </div>

                    <div className="form-group">
                        <label htmlFor="payment-date">Waktu Pembayaran</label>
                        <input type="date" id="payment-date" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="transfer-to">Ditransfer Ke</label>
                        <select id="transfer-to" required>
                            <option value="BRI - Uci Chatrinada">BRI - 000 - Uci Chatrinada</option>
                            <option value="Mandiri - Windi Al Azmi">Mandiri - 000 - Windi Al Azmi</option>
                            <option value="BTPN - Erwiana Anggriani">BTPN - Erwiana Anggriani</option>
                            <option value="BNI - Sabrina Natasya Bilbina">BNI - Sabrina Natasya Bilbina</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="bank-name">Bank Asal</label>
                        <input type="text" id="bank-name" placeholder="Contoh: Mandiri" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="account-name">Nama Pemilik Rekening</label>
                        <input type="text" id="account-name" placeholder="Nama Pemilik Rekening" required />
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
                    <Link to="/success-payment">
                        <button type="button" className="submit-btn">Konfirmasi</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Payment3;
