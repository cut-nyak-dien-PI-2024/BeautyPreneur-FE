import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="white-gradient"></div> {/* Tambahkan white-gradient sebagai bagian dari Hero */}
      <div  id ="home" className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="pink-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Kecantikan  <br />
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des ">
            <span>Temukan kelas pelatihan yang kamu inginkan!</span>
            <span>Semua pelatihan dari dasar hingga mahir, dibimbing langsung dengan mentor profesional. </span>           
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--primary)" size={25} />
            <input type="text" />
            <button className="button">Cari</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Pelatihan
              Pemula</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Pelatihan
              Menengah</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Pelatihan
              Mahir</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./makeup2.jpg" alt="hero image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
