import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./DataDetailCourse.css";
import axios from 'axios';
import { getCourseBySlug } from "../services/coursesServices";

const DataDetailCourse = () => {
  const [training, setTraining] = useState(null);
  const [activeTab, setActiveTab] = useState("about");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // validate user logged-in before goto payment flow
    // redirect the user to sign-in pages if not logged-in
    // continue to payment page if logged-in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      alert("Please sign-in before continue");
      navigate(`/login`);
      return;
    }

    navigate(`/payment/${id}`);
  };

  useEffect(() => {
    getCourseBySlug(id)
      .then(response => {
        const trainingData = response;
        setTraining(trainingData.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!training) {
    return <p>Loading...</p>;
  }

  return (
    <div className="training-container">
      <div className="training__header">
        <div className="training__image-container">
          <img src={training.headline_img} alt="Training" className="training__image" />
        </div>
        <div className="training__desc">
          <h3 className="training__title">{training.title}</h3>
          <p className="training__text">{training.desc}</p>
          <div className="training__price-container">
            <span className="training__price--cross">{training?.original_price || training.price}</span>
            <span className="training__price">
              {training.price === 'gratis' ? 'Free' : `Rp ${training.price}`}
            </span>
          </div>
          <button className="btn-register" onClick={handleRegisterClick}>Daftar</button>
        </div>
      </div>

      <div className="training__content">
        <div className="training__tabs-section">
          <ul className="training__tabs">
            <li className={`training__tab ${activeTab === "about" ? "active" : ""}`} onClick={() => setActiveTab("about")}>About</li>
            <li className={`training__tab ${activeTab === "materi" ? "active" : ""}`} onClick={() => setActiveTab("materi")}>Materi</li>
            <li className={`training__tab ${activeTab === "porto" ? "active" : ""}`} onClick={() => setActiveTab("porto")}>Portofolio</li>
          </ul>

          <div className="training__tab-content">
            {activeTab === "about" && (
              <p>{training.about || 'Pelatihan Makeup Sekolah kami dirancang khusus untuk para wanita yang ingin menguasai seni rias wajah dengan keterampilan praktis dan tren terkini.'}</p>
            )}
            {activeTab === "materi" && (
              <ol>
                {training.materi ? training.materi.split(", ").map((item, index) => (
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
            )}
            {activeTab === "porto" && (
              <div className="portfolio-images">
                {training.portofolio && training.portofolio.map((src, index) => (
                  <img key={index} className="portfolio-image" src={src.image_url} alt={`Portfolio ${index + 1}`} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="training__mentor-info">
          <div className="mentor-card">
            <img src={training.image_mentor} alt="Mentor" className="mentor-card__image" />
            <div className="mentor-card__details">
              <span className="mentor-card__name">{training.mentor}</span>
              <p className="mentor-card__role">Mentor</p>
            </div>
          </div>
          <div className="training__details">
            <div><strong>Tingkat:</strong> {training.level}</div>
            <div><strong>Tanggal:</strong> {training.duration?.date}</div>
            <div><strong>Waktu:</strong> {training.duration?.time || training.duration?.hour}</div>
            <div><strong>Jumlah Peserta:</strong> {training.total_student == "" ? 0 : training.total_student}</div>
            <div><strong>Alamat:</strong> {training.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDetailCourse;
