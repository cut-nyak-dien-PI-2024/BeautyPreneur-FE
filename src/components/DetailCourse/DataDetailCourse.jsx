import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import "./DataDetailCourse.css";
import axios from 'axios';

const DataDetailCourse = () => {
  const [training, setTraining] = useState(null);
  const [activeTab, setActiveTab] = useState("about");
  const { id } = useParams(); // Ambil `id` dari URL
  const navigate = useNavigate(); // Inisialisasi navigate

  // Fungsi untuk navigasi ke halaman Payment1
  const handleRegisterClick = () => {
    navigate(`/payment/${id}`); // Navigasi ke halaman Payment dengan ID yang sama
  };

  useEffect(() => {
    axios
      .get(`https://api.mockfly.dev/mocks/8b71d6f2-9d3a-43ed-85d5-483f9c7e2c1d/pelatihan`)
      .then(response => {
        const trainingData = response.data.data.find(item => item.id === id);
        setTraining(trainingData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!training) {
    return <p>Loading...</p>;
  }

  return (
    <div id="training" className="container mt-5">
      {/* Header Section */}
      <div className="training__header d-flex flex-column flex-md-row align-items-center mb-4">
        {/* Image Section */}
        <div className="training_image me-md-4">
          <img
            src={training.headline_img}
            alt="Training"
            className="img-fluid training__image"
          />
        </div>
        {/* Description Section */}
        <div className="training__desc">
          <h3 className="training__title">{training.title}</h3>
          <div className="mb-3">
            <p>{training.desc}</p>
          </div>
          <div className="mb-3">
            <span className="training__price training__price--cross">{training.original_price}</span>
            <span className="training__price ms-2">
              {training.price === 'gratis' ? 'Free' : `Rp ${training.price}`}
            </span>
          </div>
          <button className="btn btn-primary training__register-button" onClick={handleRegisterClick}>Daftar</button>
        </div>
      </div>

      {/* Body Section */}
      <div className="training__body row">
        {/* Tabs and Content */}
        <div className="col-md-8">
          <div className="training__tabs">
            <ul className="nav nav-tabs nav-fill training__tabs-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "about" ? "active" : ""}`}
                  onClick={() => setActiveTab("about")}
                >
                  About
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "materi" ? "active" : ""}`}
                  onClick={() => setActiveTab("materi")}
                >
                  Materi
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "porto" ? "active" : ""}`}
                  onClick={() => setActiveTab("porto")}
                >
                  Portofolio
                </button>
              </li>
            </ul>
            <div className="tab-content training__tabs-content mt-3" id="myTabContent">
              {activeTab === "about" && (
                <div className="tab-pane fade show active">
                  <p>
                    {training.about || 'Pelatihan Makeup Sekolah kami dirancang khusus untuk para wanita yang ingin menguasai seni rias wajah dengan keterampilan praktis dan tren terkini.'}
                  </p>
                </div>
              )}
              {activeTab === "materi" && (
                <div className="tab-pane fade show active">
                  <ol>
                    {training.materi ? training.materi.map((item, index) => (
                      <li key={index}>{item}</li>
                    )) : (
                      <>
                        <li>Teknik Dasar</li>
                        <li>Teknik Apply Shading</li>
                        <li>Kewajiban memakai sunscreen</li>
                        <li>Jangan lupa pelembab sebelum apply makeup!</li>
                      </>
                    )}
                  </ol>
                </div>
              )}
              {activeTab === "porto" && (
                <div className="tab-pane fade show active">
                  <div className="row">
                    {training.porto && training.porto.map((src, index) => (
                      <div className="col-6" key={index}>
                        <img className="img-fluid m-2" src={src} alt={`Portfolio ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mentor Section */}
        <div className="col-md-4">
          <div className="training__info-card">
            <div className="training__mentor-card mb-3 p-3">
              <div className="d-flex align-items-center">
                <img src={training.image_mentor} alt="Mentor" className="training__mentor-pic me-3" />
                <div>
                  <span className="training__mentor-name">{training.mentor}</span>
                  <p className="mb-0"><b>Mentor</b></p>
                </div>
              </div>
            </div>
            <div className="training__level-card p-3">
              <div className="training__level-info">
                <div className="training__level-label">Tingkat</div>
                <div className="training__level-value">{training.level}</div>
              </div>
              <div className="training__level-info">
                <div className="training__level-label">Tanggal</div>
                <div className="training__level-value">{training.duration.date}</div>
              </div>
              <div className="training__level-info">
                <div className="training__level-label">Waktu</div>
                <div className="training__level-value">{training.duration.time}</div>
              </div>
              <div className="training__level-info">
                <div className="training__level-label">Jumlah Peserta</div>
                <div className="training__level-value">{training.total_student}</div>
              </div>
              <div className="training__level-info">
                <div className="training__level-label">Alamat</div>
                <div className="training__level-value">
                  {training.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDetailCourse;
