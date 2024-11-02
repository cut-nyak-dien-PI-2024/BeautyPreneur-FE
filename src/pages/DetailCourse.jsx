import React from 'react';

const TrainingSection = () => (
  <section id="training">
    <div className="training__header">
      <div className="training_image">
        <img
          src="/assets/images/pelatihan-1-header.jpg"
          className="img-fluid training__image"
          alt="Training"
        />
      </div>
      <div className="training__desc">
        <h3 className="training__title">Makeup Simple Sekolah</h3>
        <div className="mb-5">
          <p>Kelas Makeup ini cocok banget untuk kamu yang masih pemula</p>
          <p>makeup dengan simple look akan membuat kamu terlihat lebih segar!</p>
        </div>
        <div className="mb-3">
          <span className="training__price training__price--cross">Rp.100.000</span>
          <span className="training__price">Rp.95.000</span>
        </div>
        <a href="/payment/payment1.jsx" className="btn btn-primary training__register-button">
          Daftar
        </a>
      </div>
    </div>
    {/* Add additional sections for tabs and training details */}
  </section>
);

export default TrainingSection;
